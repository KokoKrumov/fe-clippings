import {
	SELECT_DEPARTMENTS
} from "../constants/types";

export const selectDepartments = (data) => {
	return {
		type: SELECT_DEPARTMENTS,
		data: data,
	}
}
