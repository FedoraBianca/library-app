import { IValidationConfig } from "../interfaces/validations";
import bookFormRules from "./validation-rules/bookFormRules";

export const validationConfig: IValidationConfig = {
    ...bookFormRules
};