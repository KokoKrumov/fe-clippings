import {
	SELECT_EMPLOYEE
} from "../constants/types";

export const selectEmployee = (data) => {
	return {
		type: SELECT_EMPLOYEE,
		data: data,
	}
}
