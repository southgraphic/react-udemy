import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

//why is this an array (the middleware the store is expecting from redux is an array?) logger is the function provided by redux logger that is passed into the array, this is more scalable because you can add more middlewares to the array besides logger






