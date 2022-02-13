import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "../components/CustomTable";
import { IState } from "../interfaces/state";
import { getUserListStart } from "../redux/actions/usersActions";

const DashboardPage = () => {
    const dispatch = useDispatch();
    const { list, loading, error } = useSelector((state: IState) => state.users);

    useEffect(() => {
        dispatch(getUserListStart());
    }, []);

    return (
        <div>
            <CustomTable />
        </div>
    );
};

export default DashboardPage;