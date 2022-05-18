import CustomButton from "../components/CustomButton";
import CustomModal from "../components/CustomModal";
import { useDispatch } from "react-redux";
import { IModalProps, IReturnModalInput } from "../interfaces/page";
import { toggleModal } from "../redux/actions/pageActions";
import { returnBookStart } from "../redux/actions/bookActions";

const ReturnModal = (props: IModalProps) => {
  const dispatch = useDispatch();
  const { order, penalty } = props.input as IReturnModalInput;
  const penaltyMessage = penalty ? `Your card will be debited with ${penalty} $ representing the penalty for your delayed return!` : 'There is no penalty!';

  const handleReturn = () => {
    dispatch(returnBookStart({ data: order }));
    dispatch(toggleModal({ active: null }));
  };

  const handleCloseModal = () => {
    dispatch(toggleModal({ active: null }));
  };

  return (
    <CustomModal
      title='Return information'
      showModal={props.showModal}
      toggle={handleCloseModal}
      defaultFooter={false}
      size='lg'
      footerComponent={
        <div className='w-100 px-5 d-flex justify-content-between'>
          <CustomButton variant='danger' onClick={handleCloseModal}>
            Cancel
          </CustomButton>

          <CustomButton variant='success' onClick={handleReturn}>
            Confirm
          </CustomButton>
        </div>
      }
    >
      <div className='text-center'>
        <p>You are about to return {order.bookTitle}</p>
        <p>{penaltyMessage}</p>
      </div>
    </CustomModal>
  );
};

export default ReturnModal;