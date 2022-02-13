import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, Table } from "reactstrap";
import CustomButton from "../components/CustomButton";
import { IState } from "../interfaces/state";
import { IUser } from "../interfaces/user";
import { getUserListStart } from "../redux/actions/usersActions";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state: IState) => state.users);
    const headerData = ['Id', 'Name', 'Username', 'City', 'Email', 'Edit', 'Delete'];

    useEffect(() => {
        dispatch(getUserListStart());
    }, []);

    const handleAdd = () => {
        console.log('add');
    };

    const handleEdit = (id: number) => {
        console.log('edit', id);
    };

    const handleDelete = (id: number) => {
        console.log('delete', id);
    };

    return (
        <Card>
            <CardBody>
            <Table className='responsive'>
                <thead>
                    <tr>
                        {
                            headerData.map((header: string) => <th key={header}>{header}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((user: IUser, rowIndex: number) => <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username ? user.username : 'N/A'}</td>
                            <td>{user.address ? user.address.city : 'N/A'}</td>
                            <td>{user.email}</td>
                            <td>
                                <CustomButton variant='warning' onClick={() => handleEdit(user.id)}>Edit</CustomButton>
                            </td>
                            <td>
                                <CustomButton variant='danger' onClick={() => handleDelete(user.id)}>Delete</CustomButton>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
            </CardBody>
        </Card>
    );
};

export default DashboardPage;