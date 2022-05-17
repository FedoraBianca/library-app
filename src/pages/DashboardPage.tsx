/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert } from "reactstrap";
import CustomButton from "../components/CustomButton";
import FlashMessage from "../components/FlashMessage";
import { IBook } from "../interfaces/book";
import { AppModals } from "../interfaces/page";
import { IState } from "../interfaces/state";
import { getBookListStart } from "../redux/actions/bookActions";
import { clearPageFlashMessage, toggleModal } from "../redux/actions/pageActions";
import { PrivateRouteList } from "../routes/routes";
import CustomTable from "../components/CustomTable";
import ActionEnhancer from "../components/TableEnhancers/ActionEnhancer";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state: IState) => state.books);
  const flashMessage = useSelector((state: IState) => state.page.flashMessage);
  const headerData = ['ISBN', 'Title', 'Borrow Price', 'Availability', 'Total Items'];
  const [tableData, setTableData] = useState<Record<string, any>[]>();
  let history = useHistory();

  useEffect(() => {
    dispatch(getBookListStart());
  }, []);

  useEffect(() => {
    const data = list.map((item: Record<string, any>) => {
      let formattedItem = {
        ...item,
        totalItems: `${item.totalItems} items`,
        availableItems: item.availableItems ? `${item.availableItems} items` : 'No book available',
        borrowPrice: `${item.borrowPrice} $`,
        action: item.availableItems ? { enhancer: <ActionEnhancer item={item} action={handleBorrow} actionName='Borrow' /> } : null
      }

      return formattedItem;
    })

    setTableData(data);
  }, [list]);

  const handleAdd = () => {
    history.push(PrivateRouteList.ADD_BOOK);
  };

  const handleBorrowedBooks = () => {
    history.push(PrivateRouteList.BORROWED_BOOKS);
  }

  const handleBorrow = (book: IBook) => {
    dispatch(toggleModal({ active: AppModals.BORROW_MODAL, input: { book } }));
  };

  const handleClearFlashMessage = () => {
    dispatch(clearPageFlashMessage());
  };

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
      <div className="w-100 d-flex flex-row justify-content-between mb-5">
        <h5>Check out our book collection:</h5>
        <div>
          <CustomButton onClick={handleBorrowedBooks} variant='success' className='me-3'>View borrowed books</CustomButton>
          <CustomButton onClick={handleAdd}>Add new book</CustomButton>
        </div>
      </div>
      {
        error && <Alert>{error}</Alert>
      }
      {
        loading && <p>Loading...</p>
      }
      {!loading && !error && tableData &&
        <CustomTable tableData={tableData} tableHeader={headerData} action={() => handleBorrow} />
      }
    </>
  );
};

export default DashboardPage;