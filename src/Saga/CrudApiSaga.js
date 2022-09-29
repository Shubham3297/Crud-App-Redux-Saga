import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { deleteEmployeeData, editEmployeeData, getEmployeeData, postEmployeeData } from "../Actions/CrudApiActions";
import { DELETE_EMPLOYEE_DATA, EDIT_EMPLOYEE_DATA, GET_EMPLOYEE_DATA, POST_EMPLOYEE_DATA } from "../Actions/Types";
import axios from 'axios';

// POST EMPLOYEE DATA ,   1st method get the data witiout refreshing
const postEmployeeDataToServer = async (model) => {
    const request = await axios.post("http://localhost:3005/todo", model)
    return request;
};
function* postEmployeeDataSaga(model) {
    try {
        const response = yield call(postEmployeeDataToServer, model.payload);
        const responseData = yield call(getEmployeeDataFromServer);
        if (responseData) {
            yield put(postEmployeeData.success(responseData.data));
        }
    } catch (error) {
        yield put(postEmployeeData.failed(error.response));
    }
}

//GET EMPLOYEE DATA
const getEmployeeDataFromServer = async (model) => {
    const request = await axios.get("http://localhost:3005/todo")
    return request;
};
function* getEmployeeDataSaga(model) {
    try {
        const response = yield call(getEmployeeDataFromServer, model.payload);
        if (response) {
            yield put(getEmployeeData.success(response.data));
        }
    } catch (error) {
        yield put(getEmployeeData.failed(error.response));
    }
}

// DELETE EMPLOYEE DATA
const deleteEmployeeDataFromServer = async (model) => {
    const request = await axios.delete(`${"http://localhost:3005/todo"}/${model}`) //model==id
    return request;
}
function* deleteEmployeeDataSaga(model) {
    try {
        const response = yield call(deleteEmployeeDataFromServer, model.payload);
        if (response) {
            yield put(deleteEmployeeData.success(response.data));
        }
    } catch (error) {
        yield put(deleteEmployeeData.failed(error.response));
    }
}

//EDIT EMPLOYEE DATA
const editEmployeeDataToServer = async (model) => {
    const request = await axios.put(`${"http://localhost:3005/todo"}`, model)
    return request;
}
function* editEmployeeDataSaga(model) {
    try {
        const response = yield call(editEmployeeDataToServer, model.payload);
        if (response) {
            yield put(editEmployeeData.success(response.data));
        }
    } catch (error) {
        yield put(editEmployeeData.failed(error.response));
    }
}

export const crudApiSagas = [
    takeEvery(POST_EMPLOYEE_DATA, postEmployeeDataSaga),
    takeEvery(GET_EMPLOYEE_DATA, getEmployeeDataSaga),
    takeEvery(DELETE_EMPLOYEE_DATA, deleteEmployeeDataSaga),
    takeEvery(EDIT_EMPLOYEE_DATA, editEmployeeDataSaga)
]

export default function* rootSaga() {
    yield all([...crudApiSagas])
}