import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Alert, Card, CardBody, Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";
import CustomButton from "../components/CustomButton";
import { IState } from "../interfaces/state";
import { IUser } from "../interfaces/user";
import { deleteUserStart, getUserListStart } from "../redux/actions/usersActions";
import { PrivateRouteList } from "../routes/routes";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state: IState) => state.users);
    const headerData = ['Id', 'Name', 'Username', 'City', 'Email', 'Edit', 'Delete'];
    let history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    
    useEffect(() => {
        dispatch(getUserListStart());
    }, [dispatch]);

    const handleAdd = () => {
        history.push(PrivateRouteList.CREATE_USER);
    };

    const handleEdit = (id: number) => {
        history.push(PrivateRouteList.UPDATE_USER.replace(':id', String(id)));
    };

    const handleDelete = (id: number) => {
        setShowModal(false);
        dispatch(deleteUserStart({ id }));
    };

    const confirmDelete = (id: number) => {
        setDeleteId(id);
        setShowModal(true);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Card>
                <CardBody>
                <div className="w-100 d-flex flex-row justify-content-between">
                    <p>User list</p>
                    <CustomButton variant='primary' onClick={handleAdd}>Add new</CustomButton>
                </div>
                {
                    list.length === 0 && <p>There is no user yet!</p>
                }
                {
                    error && <Alert>{error}</Alert>
                }
                                {
                    loading && <p>Loading...</p>
                }
                { list.length > 0 && !loading && !error &&
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
                                        <CustomButton variant='danger' onClick={() => confirmDelete(user.id)}>Delete</CustomButton>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                }
                </CardBody>
            </Card>

            <Modal isOpen={showModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Delete</ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete the user ?
                    </ModalBody>
                    <ModalFooter>
                    <CustomButton onClick={toggleModal} variant='secondary' className="me-2">
                        Cancle
                    </CustomButton>
                    <CustomButton onClick={() => handleDelete(deleteId)} variant='danger'>
                        Delete
                     </CustomButton>
                </ModalFooter>
            </Modal>
        </>

    );
};

export default DashboardPage;