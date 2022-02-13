interface IWithFieldHelpers {
    matchWith?: string;
    noValidation?: boolean;
    min?: number;
    max?: number;
}

export interface IFormInputState extends IWithFieldHelpers {
    value: string | number | boolean;
}