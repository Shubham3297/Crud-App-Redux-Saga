import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
// import createMiddleware from "redux-saga"
import rootSaga from "../Saga/indexSaga";
import rootReducer from "../Reducers/indexReducer";


// export default (initState) => {
//     const sagaMiddleware = createSagaMiddleware();
//     // const sagaMiddleware = createMiddleware();

//     const middlewares = [sagaMiddleware];

//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//     const store = createStore(rootReducer, initState, composeEnhancers(applyMiddleware(...middlewares)));

//     sagaMiddleware.run(rootSaga);
//     return store;
// }


const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store