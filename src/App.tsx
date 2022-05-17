import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModalHandler from './components/ModalHandler';
import DashboardPage from './pages/DashboardPage';
import BookPage from './pages/BookPage';
import store from './redux/store';
import { PrivateRouteList } from './routes/routes';
import BorrowedBooksPage from './pages/BorrowedBooksPage';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <h1 className='w-100 text-center mb-5'>Online Library</h1>
        <Switch>
          <Route
            exact
            path={PrivateRouteList.DASHBOARD}
            component={DashboardPage}
          />
          <Route
            exact
            path={PrivateRouteList.ADD_BOOK}
            component={BookPage}
          />
          <Route
            exact
            path={PrivateRouteList.BORROWED_BOOKS}
            component={BorrowedBooksPage}
          />
        </Switch>
        <ModalHandler />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
