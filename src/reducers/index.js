import {combineReducers} from "redux";
import data from "./DataReducer";
import filterDepartments from "./DepartmentsReducer";
import selectDepartments from "./SelectDepartmentsReducer";
import selectEmployee from "./SelectEmployeeReducer";

export default combineReducers({
	data,
	filterDepartments,
	selectDepartments,
	selectEmployee
})
