import { all, takeLatest } from "redux-saga/effects";

export function* getUserList(action: IGetUserListStart) {

}

export function* getUser(action: IGetUserStart) {
    
}

export function* createUser(action: ICreateUserStart) {
    
}

export function* deleteUser(action: IDeleteUserStart) {
    
}

export function* updateUser(action: IUpdateUserStart) {
    
}

export function* usersSaga() {
    yield all([
        takeLatest(UsersActionTypes.GET_USER_LIST, getUserList),
        takeLatest(UsersActionTypes.GET_USER, getUser),
        takeLatest(UsersActionTypes.CREATE_USER, createUser),
        takeLatest(UsersActionTypes,DELETE_USER, deleteUser),
        takeLatest(UsersActionTypes.UPDATE_USER, updateUser),
    ]);
}

