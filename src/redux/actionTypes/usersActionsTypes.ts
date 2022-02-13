import { IUser } from "../../interfaces/user";

export enum UsersActionsTypes {
    GET_USER_LIST_START = 'GET_USER_LIST_START',
    GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS',
    GET_USER_LIST_FAIL = 'GET_USER_LIST_FAIL',
    GET_USER_START = 'GET_USER_START',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAIL = 'GET_USER_FAIL',
    DELETE_USER_START = 'DELETE_USER_START',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_FAIL = 'DELETE_USER_FAIL',
    CREATE_USER_START = 'CREATE_USER_START',
    CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS',
    CREATE_USER_FAIL = 'CREATE_USER_FAIL',
    UPDATE_USER_START = 'UPDATE_USER_START',
    UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS',
    UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'
}

export interface IFailPayload {
    error: string;
}

export interface IGetUserListStartAction {
    type: UsersActionsTypes.GET_USER_LIST_START;
}

export interface IGetUserListSuccessPayload {
    list: IUser[];
}

export interface IGetUserListSuccessAction {
    type: UsersActionsTypes.GET_USER_LIST_SUCCESS;
    payload: IGetUserListSuccessPayload;
}

export interface IGetUserListFailAction {
    type: UsersActionsTypes.GET_USER_LIST_FAIL;
    payload: IFailPayload;
}

export interface IGetUserStartPayload {
    id: number;
}

export interface IGetUserStartAction {
    type: UsersActionsTypes.GET_USER_START;
    payload: IGetUserStartPayload;
}

export interface IGetUserSuccessPayload {
    user: IUser;
}

export interface IGetUserSucessAction {
    type: UsersActionsTypes.GET_USER_SUCCESS;
    payload: IGetUserSuccessPayload;
}

export interface IGetUserFailAction {
    type: UsersActionsTypes.GET_USER_FAIL;
    payload: IFailPayload;
}

export interface IDeleteUserStartPayload {
    id: number;
}

export interface IDeleteUserStartAction {
    type: UsersActionsTypes.DELETE_USER_START;
    payload: IDeleteUserStartPayload;
}

export interface IDeleteUserSuccessAction {
    type: UsersActionsTypes.DELETE_USER_SUCCESS;
}

export interface IDeleteUserFailAction {
    type: UsersActionsTypes.DELETE_USER_FAIL;
    payload: IFailPayload;
}

export interface ICreateUserStartPayload {
    user: IUser;
}

export interface ICreateUserStartAction {
    type: UsersActionsTypes.CREATE_USER_START;
    payload: ICreateUserStartPayload;
}

export interface ICreateUserSuccessAction {
    type: UsersActionsTypes.CREATE_USER_SUCCESS;
}

export interface ICreateUserFailAction {
    type: UsersActionsTypes.CREATE_USER_FAIL;
    payload: IFailPayload;
}

export interface IUpdateUserStartPayload {
    user: IUser;
}

export interface IUpdateUserStartAction {
    type: UsersActionsTypes.UPDATE_USER_START;
    payload: IUpdateUserStartPayload;
}

export interface IUpdateUserSuccessAction {
    type: UsersActionsTypes.UPDATE_USER_SUCCESS;
}

export interface IUpdateUserFailAction {
    type: UsersActionsTypes.UPDATE_USER_FAIL;
    payload: IFailPayload;
}

export type UsersActions = IGetUserListStartAction
| IGetUserListSuccessAction
| IGetUserListFailAction
| IGetUserStartAction
| IGetUserSucessAction
| IGetUserFailAction
| ICreateUserStartAction
| ICreateUserSuccessAction
| ICreateUserFailAction
| IDeleteUserStartAction
| IDeleteUserSuccessAction
| IDeleteUserFailAction
| IUpdateUserStartAction
| IUpdateUserSuccessAction
| IUpdateUserFailAction;