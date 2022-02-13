import { Route, RouteProps } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import UserPage from "../pages/UserPage";
import { PrivateRouteList } from "./routes";

const PrivateRoutes = (): React.ReactElement => (
    <>
        <Route
            path={PrivateRouteList.DASHBOARD}
            component={DashboardPage}
        />
        <Route
            path={[
                PrivateRouteList.CREATE_USER,
                PrivateRouteList.UPDATE_USER
            ]}
            component={UserPage}
        />
    </>
);

export default PrivateRoutes;