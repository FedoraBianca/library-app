import { all, put, takeLatest } from "redux-saga/effects";
import { IBook } from "../../interfaces/book";
import { IOrder } from "../../interfaces/order";
import { PageFlashMessageType } from "../../interfaces/page";
import { borrowBookFail, borrowBookSuccess, createBookFail, createBookSuccess, getActiveOrdersFail, getActiveOrdersStart, getActiveOrdersSuccess, getBookListFail, getBookListStart, getBookListSuccess, returnBookSuccess } from "../../redux/actions/bookActions";
import { setPageFlashMessage } from "../../redux/actions/pageActions";
import { BookActionsTypes, IBorrowBookStartAction, ICreateBookStartAction, IReturnBookStartAction } from "../../redux/actionTypes/bookActionsTypes";
import { ApiCall, IApiCallParams } from "../api";

export function* getBookList() {
    const requestParams = {
        route: 'some-route-here/book-list',
        type: 'get'
    };
    const response = ApiCall(requestParams as IApiCallParams);

    if (response.success) {
        yield put(getBookListSuccess({ data: response.data as IBook[]} ));
    }
    else {
        yield put(getBookListFail({ error: response.error || 'Something went wrong!'}))
    }
}

export function* createBook(action: ICreateBookStartAction) {
    const { data } = action.payload;

    const requestParams = {
        route: 'some-route-here/book',
        data,
        type: 'post',
    };

    const response = ApiCall(requestParams as IApiCallParams);

    if (response.success) {
        yield put(createBookSuccess());
        yield put(setPageFlashMessage({
            flashMessage: {
              type: PageFlashMessageType.SUCCESS,
              message: 'Your book was successfully added !'
            }
          }));
    }
    else {
        yield put(createBookFail({ error: response.error || 'Something went wrong!'}))
    }
}

export function* borrowBook(action: IBorrowBookStartAction) {
    const { data } = action.payload;

    const requestParams = {
        route: 'some-route-here/borrow-book',
        data,
        type: 'post',
    };

    const response = ApiCall(requestParams as IApiCallParams);

    if  (response.success) {
        yield put(borrowBookSuccess());
        yield put(getBookListStart());
        yield put(setPageFlashMessage({
            flashMessage: {
              type: PageFlashMessageType.SUCCESS,
              message: 'Your successfully borrowed the book !'
            }
          }));
    }
    else {
        yield put(borrowBookFail({ error: response.error || 'Something went wrong!'}))
    }
}

export function* returnBook(action: IReturnBookStartAction) {
  const { data } = action.payload;

  const requestParams = {
      route: 'some-route-here/return-book',
      data,
      type: 'post',
  };

  const response = ApiCall(requestParams as IApiCallParams);

  if  (response.success) {
      yield put(returnBookSuccess());
      yield put(getActiveOrdersStart());
      yield put(setPageFlashMessage({
          flashMessage: {
            type: PageFlashMessageType.SUCCESS,
            message: 'Your successfully returned´ the book !'
          }
        }));
  }
  else {
      yield put(borrowBookFail({ error: response.error || 'Something went wrong!'}))
  }
}

export function* getActiveOrders() {
    const requestParams = {
        route: 'some-route-here/borrowed-books',
        type: 'get'
    };
    const response = ApiCall(requestParams as IApiCallParams);

    if (response.success) {
        yield put(getActiveOrdersSuccess({ data: response.data as IOrder[]} ));
    }
    else {
        yield put(getActiveOrdersFail({ error: response.error || 'Something went wrong!'}))
    }
}

export function* booksSaga() {
    yield all([
        takeLatest(BookActionsTypes.GET_BOOK_LIST_START, getBookList),
        takeLatest(BookActionsTypes.CREATE_BOOK_START, createBook),
        takeLatest(BookActionsTypes.BORROW_BOOK_START, borrowBook),
        takeLatest(BookActionsTypes.RETURN_BOOK_START, returnBook),
        takeLatest(BookActionsTypes.GET_ACTIVE_ORDERS_START, getActiveOrders)
    ]);
}

