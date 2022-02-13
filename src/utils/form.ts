import { IGenericFormHelper, IHandleFormHelper, IValidateFormHelper } from '../interfaces/form';
import { objectDeepCopy } from './helpers';
import validate, { hasFormErrors } from './validator';

export const handleFormHelper = <D, E>(params: IHandleFormHelper<D, E>) => {
  const { dataParams, errorParams, domain, event, validateData } = params;
  const { data, setData } = dataParams;
  const { errors, setErrors } = errorParams;
  const { name } = event.target;

  if (name) {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const { matchWith, noValidation, min, max, unit } = data[name as keyof D];
    let matchValue = null;
    if (matchWith) {
      const stateData = { ...objectDeepCopy(data) };
      const { value: matchValueCompare } = stateData[matchWith];
      matchValue = matchValueCompare;
    }

    setData({
      ...data,
      [name]: {
        matchWith,
        noValidation,
        value,
        min,
        max,
        unit
      }
    });

    if (validateData && !noValidation) {
      setErrors({
        ...errors,
        [name]: validate({
          domain, name, value
        })
      });
    }
  }
};

/**
 * Returns true if the form is valid and false otherwise
 *
 * @param params IValidateFormHelper<D, E>
 * @returns boolean
 */
export const validateFormHelper = <D, E>(params: IValidateFormHelper<D, E>): boolean => {
  const { dataParams, errorParams, domain } = params;
  const { data } = dataParams;
  const { errors, setErrors } = errorParams;
  const fields = Object.keys(data);
  const stateErrors = { ...objectDeepCopy(errors) } as E & IGenericFormHelper;

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const { matchWith, noValidation } = data[field];

    if (!noValidation) {
      stateErrors[field as keyof (E & IGenericFormHelper)] = validate({
        domain,
        name: field,
        value: data[field].value,
      });
    }
  }

  setErrors({ ...stateErrors });

  return !hasFormErrors(stateErrors);
};
