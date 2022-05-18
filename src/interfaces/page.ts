import { IBook } from "./book";
import { IOrder } from "./order";

export enum PageFlashMessageType {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
    LIGHT = 'light',
    DARK = 'dark',
}

export enum AppModals {
    BORROW_MODAL = 'BORROW_MODAL',
    RETURN_MODAL = 'RETURN_MODAL',
}
  
export interface IPageFlashMessage {
    type: PageFlashMessageType;
    message: string;
}

export interface IPageModal {
    active: AppModals | null;
    input?: ModalInput;
}

export interface IModalProps {
    showModal: boolean;
    input?: ModalInput;
}

export interface IBorrowModalInput {
    book: IBook;
}

export interface IReturnModalInput {
    order: IOrder;
    penalty: number;
}

export type ModalInput = IBorrowModalInput | IReturnModalInput;