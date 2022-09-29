import { DELETE_EMPLOYEE_DATA, DELETE_EMPLOYEE_DATA_FAILURE, DELETE_EMPLOYEE_DATA_SUCCESS, EDIT_EMPLOYEE_DATA, EDIT_EMPLOYEE_DATA_FAILURE, EDIT_EMPLOYEE_DATA_SUCCESS, GET_EMPLOYEE_DATA, GET_EMPLOYEE_DATA_FAILURE, GET_EMPLOYEE_DATA_SUCCESS, POST_EMPLOYEE_DATA, POST_EMPLOYEE_DATA_FAILURE, POST_EMPLOYEE_DATA_SUCCESS } from "../Actions/Types";

const initState = {
    loading: false,
    payload: null,
    postEmployeeResponse: null,
    getEmployeeResponse: null,
    deleteEmployeeResponse: null,
    editEmployeeResponse: null,
};

export default (state = initState, action) => {
    switch (action.type) {

        // POST EMPLOYEE DATA ,   1st method get the data witiout refreshing
        case POST_EMPLOYEE_DATA:
            return { ...state, loading: true, postEmployeeResponse: null };
        case POST_EMPLOYEE_DATA_SUCCESS:
            return { ...state, loading: false, getEmployeeResponse: JSON.parse(action.payload) };
        case POST_EMPLOYEE_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case GET_EMPLOYEE_DATA:
            return { ...state, loading: true, getEmployeeResponse: null };
        //json.parse not required for axios but in this required because node server is data convert into string.
        case GET_EMPLOYEE_DATA_SUCCESS:
            console.log("action.payload", action.payload)
            return { ...state, loading: false, getEmployeeResponse: JSON.parse(action.payload) };
        case GET_EMPLOYEE_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case DELETE_EMPLOYEE_DATA:
            return { ...state, loading: true, deleteEmployeeResponse: null };
        case DELETE_EMPLOYEE_DATA_SUCCESS:
            return { ...state, loading: false, deleteEmployeeResponse: action.payload };
        case DELETE_EMPLOYEE_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case EDIT_EMPLOYEE_DATA:
            return { ...state, loading: true, editEmployeeResponse: null };
        case EDIT_EMPLOYEE_DATA_SUCCESS:
            return { ...state, loading: false, editEmployeeResponse: action.payload };
        case EDIT_EMPLOYEE_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return { ...state };
    }
};