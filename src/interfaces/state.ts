import { IBook } from "./book";
import { IOrder } from "./order";
import { IPageFlashMessage, IPageModal } from "./page";

export interface IState {
    page: IPageSlice;
    books: IBookSlice;
}

export interface IPageSlice {
    modal: IPageModal;
    flashMessage?: IPageFlashMessage;
  }

export interface IBookSlice {
    list: IBook[];
    activeOrders: IOrder[];
    loading: boolean;
    error?: string;
}
