import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
import rootSaga from '../saga/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;