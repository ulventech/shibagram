import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import config from '../config';
import reducers from './reducers';
import sagas from './sagas';

const configureSaga = sagas => function* configureSagaGenerator() {
    yield all(sagas.map(saga => fork(saga)));
};

let middleware = [];

// Create and add Redux Saga middleware
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

// Dev tools like redux for chrome
// Only run devtools in development mode.
let devTools = f => f;
if (config.STAGE === 'development') {
    // eslint-disable-next-line no-undef
    if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
        // eslint-disable-next-line no-undef
        devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
        console.log('React and Redux DevTools is ON');
    }
}

const enhancer = compose(
    applyMiddleware(...middleware),
    devTools,
);

export default () => {
    const store = createStore(
        combineReducers(reducers),
        enhancer,
    );

    // Apply sagas
    sagaMiddleware.run(configureSaga(sagas));

    return store;
};
