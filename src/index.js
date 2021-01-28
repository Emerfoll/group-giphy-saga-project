import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';





//reducers






//generator functions







//saga watcher
function* watcherSaga() {

}; //end watcherSaga




// middleware and storeInstance
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({


    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
