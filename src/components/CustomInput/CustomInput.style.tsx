import { Input, InputGroup, Label } from 'reactstrap';
import styled from 'styled-components';

export const InputWrapper = styled(InputGroup)`
    
`;

export const StyledLabel = styled(Label)`
    color: darkgray;
    font-weight: bold;
    cursor: pointer;

    &.error {
        color: red;
    }

    &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const StyledInput = styled(Input)`
    width: 100%;
    height: 40px;
    font-size: 1rem;

    &.disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;