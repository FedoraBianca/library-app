import { AppModals } from "../interfaces/page";
import BorrowModal from "../modals";

export const modals = new Map();
modals.set(AppModals.BORROW_MODAL, BorrowModal);