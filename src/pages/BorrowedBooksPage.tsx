import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FlashMessage from "../components/FlashMessage";
import { IState } from "../interfaces/state";
import { Alert } from "reactstrap";
import { clearPageFlashMessage } from "../redux/actions/pageActions";
import CustomTable from "../components/CustomTable";

const BorrowedBooksPage = () => {
    const dispatch = useDispatch();
    const { activeOrders, loading, error} = useSelector((state: IState) => state.books);
    const flashMessage = useSelector((state: IState) => state.page.flashMessage);
    const headerData = ['ISBN', 'Title', 'Borrowed Date', 'Due Date', 'Penalty'];

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
            {!loading && !error &&
                <CustomTable tableData={activeOrders} tableHeader={headerData} action={handleReturn} />
            }
        </>
    );
};

export default BorrowedBooksPage;