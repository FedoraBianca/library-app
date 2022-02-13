export enum ValidationConfigRulesTypes {
    REQUIRED = 'REQUIRED',
    PATTERN = 'PATTERN'
}

export interface IValidationConfigRule {
    rule: ValidationConfigRulesTypes;
    errorMessage: string;
    pattern?: RegExp;
}

export interface IValidationConfig {
    [key: string]: IValidationConfigRule[];
}