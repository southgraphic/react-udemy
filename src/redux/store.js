import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
//why is this an array (the middleware the store is expecting from redux is an array?) logger is the function provided by redux logger that is passed into the array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;




