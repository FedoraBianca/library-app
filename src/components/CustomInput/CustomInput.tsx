import React, { useState } from 'react';
import { isPropertySignature } from 'typescript';
import InlineErrorList from '../InlineErrorList';
import { InputWrapper, StyledInput, StyledLabel } from './CustomInput.style';

export interface ICustomInputProps {
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'textarea';
    id: string;
    fieldName: string;
    value: string | number | boolean | null;
    label?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    errors?: string[] | string;
    disabled?: boolean;
    className?: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
    type,
    id,
    fieldName,
    value,
    label = null,
    placeholder = '',
    onChange = null,
    onBlur = null,
    errors = [],
    disabled = false,
    className = ''
}) => {
    return (
        <InputWrapper className={`${className}`}>
        {label &&
            <StyledLabel htmlFor={id} className={`${disabled ? 'disabled' : ''}`}>
                {label}
            </StyledLabel>
        }

        <StyledInput
            id={id}
            name={fieldName}
            type={type}
            placedolder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
        />

        {errors && <InlineErrorList errors={errors} />}
        </InputWrapper>
    );
};

export default CustomInput;