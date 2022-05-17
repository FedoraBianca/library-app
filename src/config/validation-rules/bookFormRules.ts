import { FormDomains } from "../../interfaces/form";
import { IValidationConfig, ValidationConfigRulesTypes } from "../../interfaces/validations";

const bookFormRules: IValidationConfig = {
    [`${FormDomains.BOOK_FORM}.ISBN`]: [
        {
            rule: ValidationConfigRulesTypes.REQUIRED,
            errorMessage: 'The ISBN is required!'
        },
        {
            rule: ValidationConfigRulesTypes.PATTERN,
            pattern: /^(?:ISBN(?:-13)?:? )?(?=[0-9]{13}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)97[89][- ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$/,
            errorMessage: 'Please enter a valid ISBN!'
        }
    ],
    [`${FormDomains.BOOK_FORM}.title`]: [
        {
            rule: ValidationConfigRulesTypes.REQUIRED,
            errorMessage: 'The title is required!'
        },
        {
            rule: ValidationConfigRulesTypes.PATTERN,
            pattern: /^[\w\W]{0,50}$/,
            errorMessage: 'The title contains too many characters!'
          },
    ],
    [`${FormDomains.BOOK_FORM}.borrowPrice`]: [
        {
            rule: ValidationConfigRulesTypes.REQUIRED,
            errorMessage: 'The price is required!'
        },
        {
            rule: ValidationConfigRulesTypes.PATTERN,
            pattern: /^(?:[1-9]\d*|0)?(?:\.\d+)?$/,
            errorMessage: 'The price must be a positive number!'
          }
    ]
};

export default bookFormRules;