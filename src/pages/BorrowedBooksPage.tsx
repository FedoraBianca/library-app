/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import FlashMessage from "../components/FlashMessage";
import { IState } from "../interfaces/state";
import { Alert } from "reactstrap";
import { clearPageFlashMessage } from "../redux/actions/pageActions";
import CustomTable from "../components/CustomTable";
import { getActiveOrdersStart } from "../redux/actions/bookActions";
import ActionEnhancer from "../components/TableEnhancers/ActionEnhancer";
import { calculatePenalty } from "../utils/helpers";

const BorrowedBooksPage = () => {
    const dispatch = useDispatch();
    const { activeOrders, loading, error} = useSelector((state: IState) => state.books);
    const flashMessage = useSelector((state: IState) => state.page.flashMessage);
    const headerData = ['ISBN', 'Title', 'Borrowed Date', 'Due Date', 'Penalty'];
    const [tableData, setTableData] = useState<Record<string, any>[]>();

    useEffect(() => {
      dispatch(getActiveOrdersStart());
    }, []);

    useEffect(() => {
      const data = activeOrders.map((item: Record<string, any>) => {
        let formattedItem = {
          ISBN: item.ISBN,
          title: item.bookTitle,
          borrowedDate:  moment.utc(item.dateCreated).format('DD-MM-YYYY'),
          dueDate: moment.utc(item.dateCreated).add(2, 'weeks').format('DD-MM-YYYY'),
          penalty: calculatePenalty( moment.utc(item.dateCreated).add(2, 'weeks').format(), item.borrowPrice),
          action: { enhancer: <ActionEnhancer item={item} action={handleReturn} actionName='Return Book' /> }
        };
  
        return formattedItem;
      })
  
      setTableData(data);
    }, [activeOrders]);

    const handleReturn = () => {
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
            {
                error && <Alert>{error}</Alert>
            }
            {
                loading && <p>Loading...</p>
            }
            {!loading && !error && tableData &&
                <CustomTable tableData={tableData} tableHeader={headerData} action={handleReturn} />
            }
        </>
    );
};

export default BorrowedBooksPage;