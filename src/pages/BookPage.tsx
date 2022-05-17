import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Card, CardBody } from "reactstrap";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import useForm from "../hooks/useForm";
import { FormDomains, IFormInputState } from "../interfaces/form";
import { IState } from "../interfaces/state";
import { PrivateRouteList } from "../routes/routes";
import { createBookStart } from "../redux/actions/bookActions";

interface IBookFormStateFields {
    ISBN: IFormInputState;
    title: IFormInputState;
    borrowPrice: IFormInputState;
    items: IFormInputState;
}

interface IBookFormStateErrors {
    ISBN: string[];
    title: string[];
    borrowPrice: string[];
    items: string[];
}

const BookPage = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const initialDataState: IBookFormStateFields = {
        ISBN: { value: '' },
        title: { value: '' },
        borrowPrice: { value: '' },
        items: { value: 1, noValidation: true }
    };
    const initialErrorState: IBookFormStateErrors = {
        ISBN: [],
        title: [],
        borrowPrice: [],
        items: []
    };

    const { loading, error } = useSelector((state: IState) => state.books);
    const { data, errors, isValidForm, handleInput, setData } = useForm<IBookFormStateFields, IBookFormStateErrors>(initialDataState, initialErrorState, FormDomains.BOOK_FORM);

    const handleCancel = () => {
        history.push(PrivateRouteList.DASHBOARD);
    };

    const handleSubmit = () => {
        if (isValidForm()) {
            const newData = {
                ISBN: String(data.ISBN.value),
                title: String(data.title.value),
                borrowPrice: Number(data.borrowPrice.value),
                availableItems: Number(data.items.value),
                totalItems: Number(data.items.value)
            };

            dispatch(createBookStart({ data: { ...newData} } ));

            history.push(PrivateRouteList.DASHBOARD);
        }
    };

    return (
        <Card>
            <CardBody>
                {
                    error && <Alert>{error}</Alert>
                }
                {
                    loading && <p>Loading...</p>
                }
                {!error && !loading && <div className='w-100'>
                    <div>
                        <CustomInput
                            type='text'
                            id='title'
                            fieldName='title'
                            value={data.title.value}
                            errors={errors.title}
                            placeholder='Type the title here'
                            label='Title'
                            onBlur={handleInput}
                            onChange={handleInput}
                            className='mb-2'
                        />

                        <CustomInput
                            type='text'
                            id='ISBN'
                            fieldName='ISBN'
                            value={data.ISBN.value}
                            errors={errors.ISBN}
                            placeholder='Type the ISBN here'
                            label='ISBN'
                            onBlur={handleInput}
                            onChange={handleInput}
                            className='mb-2'
                        />

                        <CustomInput
                            type='text'
                            id='borrowPrice'
                            fieldName='borrowPrice'
                            value={data.borrowPrice.value}
                            placeholder='00.00'
                            label='Borrow Price'
                            errors={errors.borrowPrice}
                            onChange={handleInput}
                            onBlur={handleInput}
                            inputGroupText={{
                                text: '$',
                                position: 'end'
                            }}
                        />

                        <CustomInput
                            type='number'
                            id='items'
                            fieldName='items'
                            value={data.items.value}
                            errors={errors.items}
                            placeholder='Type the number of items here'
                            label='Items Number'
                            onBlur={handleInput}
                            onChange={handleInput}
                            className='mb-2'
                            min={1}
                        />
                    </div>
                    <div className='d-flex w-100 justify-content-end mt-2'>
                        <CustomButton
                            onClick={handleCancel}
                            variant='light'
                        >
                            Cancel
                        </CustomButton>
                        <CustomButton
                            onClick={handleSubmit}
                            variant='success'
                            className='ms-2'
                        >
                            Submit
                        </CustomButton>
                    </div>
                </div>}
            </CardBody>
        </Card>
    );
};

export default BookPage;