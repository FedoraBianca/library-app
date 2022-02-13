import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody } from "reactstrap";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { FormDomains, IFormInputState } from "../interfaces/form";
import { IState } from "../interfaces/state";
import { getUserStart } from "../redux/actions/usersActions";

interface IUserFormStateFields {
    name: IFormInputState;
    email: IFormInputState;
}

interface IUserFormStateErrors {
    name: string[];
    email: string[];
}

const UserPage = () => {
    const particle = window.location.pathname.split('/').pop();
    const id = Number(particle);
    const dispatch = useDispatch();
    const { currentUser, loading, error } = useSelector((state: IState) => state.users);
    const initialDataState: IUserFormStateFields = {
        name: { value: ''},
        email: { value: ''}
    };
    const initialErrorState: IUserFormStateErrors = {
        name: [],
        email: []
    };

    const { data, errors, isValidForm, handleInput, setData } = useForm<IUserFormStateFields, IUserFormStateErrors>(initialDataState, initialErrorState, FormDomains.USER_FORM);

    useEffect(() => {
        if (id) {
            dispatch(getUserStart({ id }));
        }
    })

    const handleCancel = () => {
        console.log('cancel');
    };

    const handleSubmit = () => {
        console.log('submit');
    };

    return (
        <Card>
            <CardBody>
                <div>
                    <CustomInput
                        type='text'
                        id='name'
                        fieldName='name'
                        value={data.name.value}
                        errors={errors.name}
                        placeholder='Type name here'
                        label='Name'
                        onBlur={handleInput}
                        onChange={handleInput}
                        className='mb-2'
                    />
                    <CustomInput
                        type='email'
                        id='email'
                        fieldName='email'
                        value={data.email.value}
                        errors={errors.email}
                        placeholder='Type email here'
                        label='Email'
                        onBlur={handleInput}
                        onChange={handleInput}
                    />
                </div>
                <div className='d-flex w-100 justify-content-end mt-2'>
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
        </Card>
    );
};

export default UserPage;