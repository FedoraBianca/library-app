import { FormDomains } from "../../interfaces/form";
import { IValidationConfig, ValidationConfigRulesTypes } from "../../interfaces/validations";

const userFormRules: IValidationConfig = {
    [`${FormDomains.USER_FORM}.name`]: [
        {
            rule: ValidationConfigRulesTypes.REQUIRED,
            errorMessage: 'The name is required!'
        }
    ],
    [`${FormDomains.USER_FORM}.email`]: [
        {
            rule: ValidationConfigRulesTypes.REQUIRED,
            errorMessage: 'The email is required!'
        },
        {
            rule: ValidationConfigRulesTypes.PATTERN,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            errorMessage: 'The email is not valid!'
        },
    ]
};

export default userFormRules;