/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FlashMessage from "../components/FlashMessage";
import { IState } from "../interfaces/state";
import { Alert } from "reactstrap";
import { clearPageFlashMessage, toggleModal } from "../redux/actions/pageActions";
import CustomTable from "../components/CustomTable";
import { getActiveOrdersStart } from "../redux/actions/bookActions";
import ActionEnhancer from "../components/TableEnhancers/ActionEnhancer";
import { calculatePenalty } from "../utils/helpers";
import CustomButton from "../components/CustomButton";
import { PrivateRouteList } from "../routes/routes";
import { AppModals } from "../interfaces/page";
import { IOrder } from "../interfaces/order";

const BorrowedBooksPage = () => {
  const dispatch = useDispatch();
  const { activeOrders, loading, error } = useSelector((state: IState) => state.books);
  const flashMessage = useSelector((state: IState) => state.page.flashMessage);
  const headerData = ['ISBN', 'Title', 'Borrowed Date', 'Due Date', 'Penalty'];
  const [tableData, setTableData] = useState<Record<string, any>[]>();
  let history = useHistory();

  useEffect(() => {
    dispatch(getActiveOrdersStart());
  }, []);

  useEffect(() => {
    const data = activeOrders.map((item: Record<string, any>) => {
      let formattedItem = {
        ISBN: item.ISBN,
        title: item.bookTitle,
        borrowedDate: moment.utc(item.dateCreated).format('DD-MM-YYYY'),
        dueDate: moment.utc(item.dateCreated).add(2, 'weeks').format('DD-MM-YYYY'),
        penalty: `${calculatePenalty(moment.utc(item.dateCreated).add(2, 'weeks').format(), item.borrowPrice)} $`,
        action: { enhancer: <ActionEnhancer item={item} action={handleReturn} actionName='Return Book' /> }
      };

      return formattedItem;
    })

    setTableData(data);
  }, [activeOrders]);

  const handleReturn = (order: IOrder) => {
    let penalty = calculatePenalty(moment.utc(order.dateCreated).add(2, 'weeks').format(), order.borrowPrice);
    dispatch(toggleModal({ active: AppModals.RETURN_MODAL, input: { order, penalty} }));
  };

  const handleClearFlashMessage = () => {
    dispatch(clearPageFlashMessage());
  };

  const handleViewAllBooks = () => {
    history.push(PrivateRouteList.DASHBOARD);
  }

  return (
    <>
      {!loading && flashMessage && (
        <FlashMessage
          color={flashMessage.type}
          onClose={handleClearFlashMessage}
          className='mt-3'
          autoFadeMilliseconds={3000}
        >
          {flashMessage.message}
        </FlashMessage>
      )}
      {
        error && <Alert>{error}</Alert>
      }
      {
        loading && <p>Loading...</p>
      }
      <CustomButton onClick={handleViewAllBooks} variant='success' className='mb-3'>View all books</CustomButton>

      {!loading && !error && tableData &&
        <CustomTable tableData={tableData} tableHeader={headerData} />
      }
    </>
  );
};

export default BorrowedBooksPage;