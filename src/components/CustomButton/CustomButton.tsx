import React from 'react';
import { Button } from 'reactstrap';

export interface ICustomButtonProps {
    onClick: (event: React.MouseEvent) => void;
    children: React.ReactNode;
    disabled?: boolean;
    variant?: 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
    className?: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
    onClick,
    children,
    disabled = false,
    variant = 'primary',
    className = ''
}) => {
    return (
        <Button className={`btn btn-${variant} ${className}`} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    );
}

export default CustomButton;