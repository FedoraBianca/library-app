import { ICreateUserStartPayload, IDeleteUserStartPayload, IFailPayload, IGetUserListSuccessPayload, IGetUserStartPayload, IGetUserSuccessPayload, IUpdateUserStartPayload, UsersActionsTypes } from "../actionTypes/usersActionsTypes";

export const getUserListStart = () => ({
    type: UsersActionsTypes.GET_USER_LIST_START
});

export const getUserListSuccess = (payload: IGetUserListSuccessPayload) => ({
    type: UsersActionsTypes.GET_USER_LIST_SUCCESS,
    payload
});

export const getUserListFail = (payload: IFailPayload) => ({
    type: UsersActionsTypes.GET_USER_LIST_FAIL,
    payload
});

export const getUserStart = (payload: IGetUserStartPayload) => ({
    type: UsersActionsTypes.GET_USER_LIST_START,
    payload
});

export const getUserSuccess = (payload: IGetUserSuccessPayload) => ({
    type: UsersActionsTypes.GET_USER_SUCCESS,
    payload
});

export const getUserFail = (payload: IFailPayload) => ({
    type: UsersActionsTypes,
    payload
});

export const deleteUserStart = (payload: IDeleteUserStartPayload) => ({
    type: UsersActionsTypes.DELETE_USER_START,
    payload
});

export const deleteUserSuccess = () => ({
    type: UsersActionsTypes.DELETE_USER_START
});

export const deleteUserFail = (payload: IFailPayload) => ({
    type: UsersActionsTypes.DELETE_USER_FAIL,
    payload
});

export const createUserStart = (payload: ICreateUserStartPayload) => ({
    type: UsersActionsTypes.CREATE_USER_START,
    payload
});

export const createUserSuccess = () => ({
    type: UsersActionsTypes.CREATE_USER_SUCCESS
});

export const createUserFail = (payload: IFailPayload) => ({
    type: UsersActionsTypes.CREATE_USER_FAIL,
    payload
});

export const updateUserStart = (payload: IUpdateUserStartPayload) => ({
    type: UsersActionsTypes.UPDATE_USER_START,
    payload
});

export const updateUserSuccess = () => ({
    type: UsersActionsTypes.UPDATE_USER_SUCCESS
});

export const updateUserFail = (payload: IFailPayload) => ({
    type: UsersActionsTypes.UPDATE_USER_FAIL,
    payload
});