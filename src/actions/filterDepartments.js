import {
	FILTER_DEPARTMENTS
} from "../constants/types";

export const filterDepartments = (data) => {
	return {
		type: FILTER_DEPARTMENTS,
		data: data,
	}
}
