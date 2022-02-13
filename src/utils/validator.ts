import { validationConfig } from '../config/validations';
import { IValidationConfigRule, ValidationConfigRulesTypes } from '../interfaces/validations';

export interface IValidatorServiceField {
  domain: string;
  name: string;
  value: string | number | boolean | undefined | null;
}

const validate = (field: IValidatorServiceField): string[] => validateField({ ...field });

export const validateField = (field: IValidatorServiceField): string[] => {
  const { domain, name, value } = field;
  const validations = validationConfig[`${domain}.${name}`];

  if (!Array.isArray(validations)) {
    throw new Error('No validation rules were found for this field. Check if the domain and/or field name are/is correct');
  }
  const fieldErrors: string[] = [];

  if (Array.isArray(validations)) {
    validations.forEach((validation: IValidationConfigRule) => {
      switch (validation.rule) {
        case ValidationConfigRulesTypes.REQUIRED:
          if (!field.value?.toString().trim()) {
            fieldErrors.push(validation.errorMessage);
          }
          break;
        case ValidationConfigRulesTypes.PATTERN:
          if (value && validation.pattern && !new RegExp(validation.pattern).exec(value.toString())) {
            fieldErrors.push(validation.errorMessage);
          }
          break;
        default:
          throw new Error('The validation rule is not defined');
      }
    });
  }

  return fieldErrors;
};

export const getErrorList = (errors: Record<string, string[]>): string[] => Object.values(errors).flat(2);
export const hasFormErrors = (errors: Record<string, string[]>): boolean => {
  const errorList: string[] = getErrorList(errors);

  return errorList.length > 0;
};

export default validate;