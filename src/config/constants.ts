import { AppModals } from "../interfaces/page";
import BorrowModal from "../modals/BorrowModal";
import ReturnModal from "../modals/ReturnModal";

export const modals = new Map();
modals.set(AppModals.BORROW_MODAL, BorrowModal);
modals.set(AppModals.RETURN_MODAL, ReturnModal);