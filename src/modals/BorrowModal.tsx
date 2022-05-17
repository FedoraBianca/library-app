import React from 'react';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CustomButton from '../components/CustomButton';
import CustomModal from '../components/CustomModal';
import { IBorrowModalInput, IModalProps } from '../interfaces/page';
import { toggleModal } from '../redux/actions/pageActions';
import { PrivateRouteList } from '../routes/routes';
import { borrowBookStart } from '../redux/actions/bookActions';

const BorrowModal = (props: IModalProps) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const { book } = props.input as IBorrowModalInput;
    const returnDate = moment().add(2, 'weeks').format('MMMM Do YYYY');
    const penalty = (book.borrowPrice / 100);

    const handleBorrow = () => {
        dispatch(borrowBookStart({ data: book }));
        dispatch(toggleModal({ active: null }));
        history.push(PrivateRouteList.DASHBOARD);
    };

    const handleCloseModal = () => {
        dispatch(toggleModal({ active: null }));
    };

    return (
        <CustomModal
            title='Borrowing information'
            showModal={props.showModal}
            toggle={handleCloseModal}
            defaultFooter={false}
            size='lg'
            footerComponent={
                <CustomButton variant='secondary' onClick={handleBorrow}>
                    Borrow
                </CustomButton>
            }
        >
            <div className='text-center'>
                <p>The price for this book is {book?.borrowPrice}$.</p>
                <p>Make sure you return it until {returnDate}, otherwise you will pay an additional fee of {penalty} for each day of delay!</p>
            </div>
        </CustomModal>
    );
};

export default BorrowModal;
