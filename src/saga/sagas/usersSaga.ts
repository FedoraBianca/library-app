import { all, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../../interfaces/user";
import { createUserFail, createUserSuccess, deleteUserFail, deleteUserSuccess, getUserFail, getUserListFail, getUserListStart, getUserListSuccess, getUserSuccess, updateUserFail, updateUserSuccess } from "../../redux/actions/usersActions";
import { ICreateUserStartAction, IDeleteUserStartAction, IGetUserStartAction, IUpdateUserStartAction, UsersActionsTypes } from "../../redux/actionTypes/usersActionsTypes";
import { ApiCall, IApiCallParams } from "../api";

export function* getUserList() {
    const requestParams = {
        route: 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
        type: 'get'
    };
    const response = ApiCall(requestParams as IApiCallParams);

    if (response.success) {
        yield put(getUserListSuccess({ list: response.data as IUser[]} ));
    }
    else {
        yield put(getUserListFail({ error: response.error || "Something went wrong!"}))
    }
}

export function* getUser(action: IGetUserStartAction) {
    const { id } = action.payload;
    const requestParams = {
        route: `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`,
        type: 'get'
    };
    const response = ApiCall(requestParams as IApiCallParams);
    if (response.success) {
        yield put(getUserSuccess({ user: response.data as IUser}));
    }
    else {
        yield put(getUserFail({ error: response.error || "Something went wrong!"}))
    }
}

export function* createUser(action: ICreateUserStartAction) {
    const { user } = action.payload;
    const requestParams = {
        route: `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${user.id}`,
        type: 'post',
        data: user
    };
    const response = ApiCall(requestParams as IApiCallParams);
    if (response.success) {
        yield put(createUserSuccess());
        yield put(getUserListStart());
    }
    else {
        yield put(createUserFail({ error: response.error || "Something went wrong!"}))
    }
}

export function* deleteUser(action: IDeleteUserStartAction) {
    const { id } = action.payload;
    const requestParams = {
        route: `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${id}`,
        type: 'delete'
    };
    const response = ApiCall(requestParams as IApiCallParams);
    if (response.success) {
        yield put(deleteUserSuccess());
        yield put(getUserListStart());
    }
    else {
        yield put(deleteUserFail({ error: response.error || "Something went wrong!"}))
    }
}

export function* updateUser(action: IUpdateUserStartAction) {
    const { user } = action.payload;
    const requestParams = {
        route: `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${user.id}`,
        type: 'put',
        data: user
    };
    const response = ApiCall(requestParams as IApiCallParams);
    if (response.success) {
        yield put(updateUserSuccess());
        yield put(getUserListStart());
    }
    else {
        yield put(updateUserFail({ error: response.error || "Something went wrong!"}))
    }
}

export function* usersSaga() {
    yield all([
        takeLatest(UsersActionsTypes.GET_USER_LIST_START, getUserList),
        takeLatest(UsersActionsTypes.GET_USER_START, getUser),
        takeLatest(UsersActionsTypes.CREATE_USER_START, createUser),
        takeLatest(UsersActionsTypes.DELETE_USER_START, deleteUser),
        takeLatest(UsersActionsTypes.UPDATE_USER_START, updateUser),
    ]);
}

