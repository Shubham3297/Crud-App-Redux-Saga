import { all } from 'redux-saga/effects';
import crudApiSagas from "./CrudApiSaga";

export default function* rootSaga() {
    yield all([
        crudApiSagas(),
    ]);
}