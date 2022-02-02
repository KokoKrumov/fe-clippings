import {SELECT_EMPLOYEE} from "../constants/types";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_EMPLOYEE:
			return {
				...action.data
			}
		default:
			return state;
	}
}
