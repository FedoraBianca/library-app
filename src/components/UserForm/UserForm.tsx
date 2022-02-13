import React from 'react';
import { CardBody } from 'reactstrap';
import { IFormInputState } from '../../interfaces/form';
import CustomButton from '../CustomButton';
import { UserFormWrapper } from './UserForm.style';

interface IUserFormProps {
    className?: string;
}

interface IUserFormStateFields {
    name: IFormInputState;
    email: IFormInputState;
}

interface IUserFormStateErrors {
    name: string[];
    email: string[];
}

const UserForm: React.FC<IUserFormProps> = ({ className = ''}) => {
    const initialDataState: IUserFormStateFields = {
        name: { value: ''},
        email: { value: ''}
    };

    const initialErrorState: IUserFormStateErrors = {
        name: [],
        email: []
    };

    const handleCancel = () => {
        console.log('cancel');
    };

    const handleSubmit = () => {
        console.log('submit');
    };
    
    return (
        <UserFormWrapper className={`d-flex ${className}`}>
            <CardBody>
                fields here
                <div className='d-flex w-100 justify-content-end'>
                    <CustomButton
                        onClick={handleCancel}
                        variant='light'
                    >
                        Cancle
                    </CustomButton>
                    <CustomButton
                        onClick={handleSubmit}
                        variant='success'
                        className='ms-2'
                    >
                        Submit
                    </CustomButton>
                </div>
            </CardBody>
        </UserFormWrapper>
    );
};

export default UserForm;