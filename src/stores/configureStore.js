import {applyMiddleware,createStore} from 'redux';
// import logger from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index'


const logger = createLogger({
    collapsed : true
});

var store = createStore(rootReducer,applyMiddleware(logger));

export default store;