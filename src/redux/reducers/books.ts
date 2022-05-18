import { BookActions, BookActionsTypes } from "../actionTypes/bookActionsTypes";
import initialState from "../initialState";

const books = (state = initialState.books, action: BookActions) => {
    switch (action.type) {
        case BookActionsTypes.GET_BOOK_LIST_START:
        case BookActionsTypes.CREATE_BOOK_START:
        case BookActionsTypes.BORROW_BOOK_START:
        case BookActionsTypes.RETURN_BOOK_START:
        case BookActionsTypes.GET_ACTIVE_ORDERS_START:
            return {
                ...state,
                loading: true,
                error: undefined
            };
        case BookActionsTypes.GET_BOOK_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.data,
                loading: false
            }
        case BookActionsTypes.GET_ACTIVE_ORDERS_SUCCESS:
            return {
                ...state,
                activeOrders: action.payload.data,
                loading: false
            }
        case BookActionsTypes.CREATE_BOOK_SUCCESS:
        case BookActionsTypes.BORROW_BOOK_SUCCESS:
        case BookActionsTypes.RETURN_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined
            }
        case BookActionsTypes.CREATE_BOOK_FAIL:
        case BookActionsTypes.GET_BOOK_LIST_FAIL:
        case BookActionsTypes.BORROW_BOOK_FAIL:
        case BookActionsTypes.RETURN_BOOK_FAIL:
        case BookActionsTypes.GET_ACTIVE_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
};

export default books;