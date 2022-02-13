import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import UserPage from './pages/UserPage';
import store from './redux/store';
import { PrivateRouteList } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Switch>
      <Route
        exact
        path={PrivateRouteList.DASHBOARD}
        component={DashboardPage}
      />
      <Route
        exact
        path={[
          PrivateRouteList.CREATE_USER,
          PrivateRouteList.UPDATE_USER
        ]}
        component={UserPage}
      />
    </Switch>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
