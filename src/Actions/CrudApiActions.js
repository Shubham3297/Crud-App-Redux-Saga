import { DELETE_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA_FAILURE, DELETE_EMPLOYEE_DATA_SUCCESS, EDIT_EMPLOYEE_DATA, EDIT_EMPLOYEE_DATA_FAILURE, EDIT_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA, GET_EMPLOYEE_DATA_FAILURE, GET_EMPLOYEE_DATA_SUCCESS, POST_EMPLOYEE_DATA, POST_EMPLOYEE_DATA_FAILURE, POST_EMPLOYEE_DATA_SUCCESS } from "./Types"

// POST EMPLOYEE DATA
export const postEmployeeData = {
    start: (model) => ({ type: POST_EMPLOYEE_DATA, payload: model }),
    success: (response) => ({ type: POST_EMPLOYEE_DATA_SUCCESS, payload: response }),
    failed: (error) => ({ type: POST_EMPLOYEE_DATA_FAILURE, payload: error })
}

//GET EMPLOYEE DATA
export const getEmployeeData = {
    start: (model) => ({ type: GET_EMPLOYEE_DATA, payload: model }),
    success: (response) => ({ type: GET_EMPLOYEE_DATA_SUCCESS, payload: response }),
    failed: (error) => ({ type: GET_EMPLOYEE_DATA_FAILURE, payload: error })
}

//DELETE EMPLOYEE DATA
export const deleteEmployeeData = {
    start: (model) => ({ type: DELETE_EMPLOYEE_DATA, payload: model }),
    success: (response) => ({ type: DELETE_EMPLOYEE_DATA_SUCCESS, payload: response }),
    failed: (error) => ({ type: DELETE_EMPLOYEE_DATA_FAILURE, payload: error })
}

//EDIT EMPLOYEE DATA
export const editEmployeeData = {
    start: (model) => ({ type: EDIT_EMPLOYEE_DATA, payload: model }),
    success: (response) => ({ type: EDIT_EMPLOYEE_DATA_SUCCESS, payload: response }),
    failed: (error) => ({ type: EDIT_EMPLOYEE_DATA_FAILURE, payload: error })
}