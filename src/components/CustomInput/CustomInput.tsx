import React from 'react';
import { InputGroup, InputGroupText } from 'reactstrap';
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
    inputGroupText?: { text: string, position: 'start' | 'end' };
    min?: number;
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
    inputGroupText = null,
    min = null,
    className = ''
}) => {
    return (
        <InputWrapper className={`${className}`}>
            {label &&
                <StyledLabel htmlFor={id} className={`${disabled ? 'disabled' : ''}`}>
                    {label}
                </StyledLabel>
            }
            <InputGroup>
                {inputGroupText && inputGroupText.position === 'start' && (<InputGroupText>{inputGroupText.text}</InputGroupText>)}

                <StyledInput
                    id={id}
                    name={fieldName}
                    type={type}
                    placedolder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    min={min}
                />

                {inputGroupText && inputGroupText.position === 'end' && (<InputGroupText>{inputGroupText.text}</InputGroupText>)}

            </InputGroup>

            {errors && <InlineErrorList errors={errors} />}
        </InputWrapper>
    );
};

export default CustomInput;