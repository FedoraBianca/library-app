import { IValidationConfig } from "../interfaces/validations";
import userFormRules from "./validation-rules/userFormRules";

export const validationConfig: IValidationConfig = {
    ...userFormRules
};