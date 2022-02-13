import { IAddress } from "./address";
import { ICompany } from "./company";

export interface IUser {
    id: number;
    name: string;
    email: string;
    username?: string;
    phone?: string;
    website?: string;
    address?: IAddress;
    company?: ICompany;
}

export interface IUserRequest {
    name: string;
    email: string;
    username?: string;
    phone?: string;
    website?: string;
    address?: IAddress;
    company?: ICompany;
}