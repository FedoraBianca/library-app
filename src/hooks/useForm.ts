import React, { useState } from 'react';
import { handleFormHelper, validateFormHelper } from '../utils/form';
import { objectDeepCopy } from '../utils/helpers';
import validate, { IValidatorServiceField } from '../utils/validator';

const useForm = <D, E>(initialDataState: D, initalErrorsState: E, domain: string) => {
  const [data, setData] = useState<D>(initialDataState);
  const [errors, setErrors] = useState<E>(initalErrorsState);

  const setDataKeep = (newData: D) => {
    const state = { ...objectDeepCopy(initialDataState) } as D;

    Object.keys(initialDataState).forEach((field) => {
      if (state[field as keyof D]) {
        const { noValidation, matchWith, min, max, unit } = state[field as keyof D] as any;
        state[field as keyof D] = {
          ...newData[field as keyof D],
          noValidation,
          matchWith,
          min,
          max,
          unit
        };
      }
    });

    setData(state);
  };

  const isValidForm = (): boolean => validateFormHelper<D, E>({
    dataParams: {
      data,
      setData,
    },
    errorParams: {
      errors,
      setErrors,
    },
    domain
  });

  const hasFieldErrors = (field: IValidatorServiceField): string[] => validate(field);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>): void => {
    handleFormHelper<D, E>({
      dataParams: {
        data,
        setData,
      },
      errorParams: {
        errors,
        setErrors,
      },
      domain,
      event,
      validateData: (event.type === 'blur' || (event.target.type === 'checkbox' && event.type === 'change'))
    });
  };

  return {
    data,
    errors,
    isValidForm,
    hasFieldErrors,
    handleInput,
    setData: setDataKeep,
    setErrors
  };
};

export default useForm;