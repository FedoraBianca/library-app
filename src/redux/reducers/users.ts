import { UsersActions, UsersActionsTypes } from "../actionTypes/usersActionsTypes";
import initialState from "../initialState";

const users = (state = initialState.users, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsTypes.GET_USER_LIST_START:
        case UsersActionsTypes.GET_USER_START:
        case UsersActionsTypes.DELETE_USER_START:
            return {
                ...state,
                loading: true,
                error: undefined,
                currentUser: undefined
            };
        case UsersActionsTypes.UPDATE_USER_START:
        case UsersActionsTypes.CREATE_USER_START:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case UsersActionsTypes.GET_USER_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload.list,
                loading: false,
                error: undefined,
                currentUser: undefined
            }
        case UsersActionsTypes.GET_USER_SUCCESS:
            return {
                 ...state,
                currentUser: action.payload.user,
                loading: false,
                error: undefined
            }   
        case UsersActionsTypes.CREATE_USER_SUCCESS:
        case UsersActionsTypes.UPDATE_USER_SUCCESS:
        case UsersActionsTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined
            }
        case UsersActionsTypes.GET_USER_LIST_FAIL:
        case UsersActionsTypes.GET_USER_FAIL:
        case UsersActionsTypes.DELETE_USER_FAIL:
        case UsersActionsTypes.UPDATE_USER_FAIL:
        case UsersActionsTypes.CREATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
};

export default users;