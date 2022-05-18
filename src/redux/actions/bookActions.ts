import { 
    BookActionsTypes, 
    IBorrowBookStartPayload, 
    ICreateBookStartPayload, 
    IFailPayload, 
    IGetActiveOrdersSuccessPayload, 
    IGetBookListSuccessPayload, 
    IReturnBookStartPayload
} from "../actionTypes/bookActionsTypes";

export const getBookListStart = () => ({
    type: BookActionsTypes.GET_BOOK_LIST_START
});

export const getBookListSuccess = (payload: IGetBookListSuccessPayload) => ({
    type: BookActionsTypes.GET_BOOK_LIST_SUCCESS,
    payload
});

export const getBookListFail = (payload: IFailPayload) => ({
    type: BookActionsTypes.GET_BOOK_LIST_FAIL,
    payload
});

export const createBookStart = (payload: ICreateBookStartPayload) => ({
    type: BookActionsTypes.CREATE_BOOK_START,
    payload
});

export const createBookSuccess = () => ({
    type: BookActionsTypes.CREATE_BOOK_SUCCESS
});

export const createBookFail = (payload: IFailPayload) => ({
    type: BookActionsTypes.CREATE_BOOK_FAIL,
    payload
});

export const borrowBookStart = (payload: IBorrowBookStartPayload) => ({
    type: BookActionsTypes.BORROW_BOOK_START,
    payload
});

export const borrowBookSuccess = () => ({
    type: BookActionsTypes.BORROW_BOOK_SUCCESS
});

export const borrowBookFail = (payload: IFailPayload) => ({
    type: BookActionsTypes.BORROW_BOOK_FAIL,
    payload
});

export const returnBookStart = (payload: IReturnBookStartPayload) => ({
  type: BookActionsTypes.RETURN_BOOK_START,
  payload
});

export const returnBookSuccess = () => ({
  type: BookActionsTypes.RETURN_BOOK_SUCCESS
});

export const returnBookFail = (payload: IFailPayload) => ({
  type: BookActionsTypes.RETURN_BOOK_FAIL,
  payload
});

export const getActiveOrdersStart = () => ({
    type: BookActionsTypes.GET_ACTIVE_ORDERS_START
});

export const getActiveOrdersSuccess = (payload: IGetActiveOrdersSuccessPayload) => ({
    type: BookActionsTypes.GET_ACTIVE_ORDERS_SUCCESS,
    payload
});

export const getActiveOrdersFail = (payload: IFailPayload) => ({
    type: BookActionsTypes.GET_ACTIVE_ORDERS_FAIL,
    payload
});
