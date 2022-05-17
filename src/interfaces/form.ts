import React, { Dispatch, SetStateAction } from "react";

interface IWithFieldHelpers {
    matchWith?: string;
    noValidation?: boolean;
    min?: number;
    max?: number;
}

export interface IFormInputState extends IWithFieldHelpers {
    value: string | number | boolean;
}

export enum FormDomains {
    BOOK_FORM = 'book-form'
}

export interface IGenericFormHelper {
    [key: string]: any;
}

export interface IDataFormHelper<D> {
    data: D & IGenericFormHelper;
    setData: Dispatch<SetStateAction<D>>;
}

export interface IErrorFormHelper<E> {
    errors: E & IGenericFormHelper,
    setErrors: Dispatch<SetStateAction<E>>;
}

export interface IValidateFormHelper<D, E> {
    dataParams: IDataFormHelper<D>,
    errorParams: IErrorFormHelper<E>,
    domain: string
}

export interface IHandleFormHelper<D, E> {
    dataParams: IDataFormHelper<D>,
    errorParams: IErrorFormHelper<E>,
    domain: string;
    event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
    validateData?: boolean;
}