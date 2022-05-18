import { IBook } from '../../interfaces/book';
import { IOrder } from '../../interfaces/order';

export enum BookActionsTypes {
    GET_BOOK_LIST_START = 'GET_BOOK_LIST_START',
    GET_BOOK_LIST_SUCCESS = 'GET_BOOK_LIST_SUCCESS',
    GET_BOOK_LIST_FAIL = 'GET_BOOK_LIST_FAIL',
    CREATE_BOOK_START = 'CREATE_BOOK_START',
    CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS',
    CREATE_BOOK_FAIL = 'CREATE_BOOK_FAIL',
    BORROW_BOOK_START = 'BORROW_BOOK_START',
    BORROW_BOOK_SUCCESS = 'BORROW_BOOK_SUCCESS',
    BORROW_BOOK_FAIL = 'BORROW_BOOK_FAIL',
    RETURN_BOOK_START = 'RETURN_BOOK_START',
    RETURN_BOOK_SUCCESS = 'RETURN_BOOK_SUCCESS',
    RETURN_BOOK_FAIL = 'RETURN_BOOK_FAIL',
    GET_ACTIVE_ORDERS_START = 'GET_ACTIVE_ORDERS_START',
    GET_ACTIVE_ORDERS_SUCCESS = 'GET_ACTIVE_ORDERS_SUCCESS',
    GET_ACTIVE_ORDERS_FAIL = 'GET_ACTIVE_ORDER_FAIL'
}

export interface IFailPayload {
    error: string;
}

export interface IGetBookListStartAction {
    type: BookActionsTypes.GET_BOOK_LIST_START;
}

export interface IGetBookListSuccessPayload {
    data: IBook[];
}

export interface IGetBookListSuccessAction {
    type: BookActionsTypes.GET_BOOK_LIST_SUCCESS;
    payload: IGetBookListSuccessPayload;
}

export interface IGetBookListFailAction {
    type: BookActionsTypes.GET_BOOK_LIST_FAIL;
    payload: IFailPayload;
}

export interface ICreateBookStartPayload {
    data: IBook;
}

export interface ICreateBookStartAction {
    type: BookActionsTypes.CREATE_BOOK_START;
    payload: ICreateBookStartPayload;
}

export interface ICreateBookSuccessAction {
    type: BookActionsTypes.CREATE_BOOK_SUCCESS;
}

export interface ICreateBookFailAction {
    type: BookActionsTypes.CREATE_BOOK_FAIL;
    payload: IFailPayload;
}

export interface IBorrowBookStartPayload {
    data: IBook;
}

export interface IBorrowBookStartAction {
    type: BookActionsTypes.BORROW_BOOK_START;
    payload: IBorrowBookStartPayload;
}

export interface IBorrowBookSuccessAction {
    type: BookActionsTypes.BORROW_BOOK_SUCCESS;
}

export interface IBorrowBookFailAction {
    type: BookActionsTypes.BORROW_BOOK_FAIL;
    payload: IFailPayload;
}

export interface IReturnBookStartPayload {
  data: IOrder;
}

export interface IReturnBookStartAction {
  type: BookActionsTypes.RETURN_BOOK_START;
  payload: IReturnBookStartPayload;
}

export interface IReturnBookSuccessAction {
  type: BookActionsTypes.RETURN_BOOK_SUCCESS;
}

export interface IReturnBookFailAction {
  type: BookActionsTypes.RETURN_BOOK_FAIL;
  payload: IFailPayload;
}

export interface IGetActiveOrdersStartAction {
    type: BookActionsTypes.GET_ACTIVE_ORDERS_START;
}

export interface IGetActiveOrdersSuccessPayload {
    data: IOrder[];
}

export interface IGetActiveOrdersSuccessAction {
    type: BookActionsTypes.GET_ACTIVE_ORDERS_SUCCESS;
    payload: IGetActiveOrdersSuccessPayload;
}

export interface IGetActiveOrdersFailAction {
    type: BookActionsTypes.GET_ACTIVE_ORDERS_FAIL;
    payload: IFailPayload;
}

export type BookActions = IGetBookListStartAction
| IGetBookListSuccessAction
| IGetBookListFailAction
| ICreateBookStartAction
| ICreateBookSuccessAction
| ICreateBookFailAction
| IBorrowBookStartAction
| IBorrowBookSuccessAction
| IBorrowBookFailAction
| IReturnBookStartAction
| IReturnBookSuccessAction
| IReturnBookFailAction
| IGetActiveOrdersStartAction
| IGetActiveOrdersSuccessAction
| IGetActiveOrdersFailAction;
