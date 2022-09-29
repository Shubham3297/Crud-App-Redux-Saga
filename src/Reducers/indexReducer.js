import { combineReducers } from "redux";
import crudApiReducer from "./CrudApiReducer";

const rootReducer = combineReducers({
    crudApiReducer: crudApiReducer
})

export default rootReducer;