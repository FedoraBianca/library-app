import { IUser } from "./user";

export interface IState {
    users: IUsers;
}

export interface IUsers {
    list: IUser[];
    loading: boolean;
    error?: string;
}