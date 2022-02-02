import {SELECT_DEPARTMENTS} from "../constants/types";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
	switch (action.type) {
		case SELECT_DEPARTMENTS:
			return {
				...action.data
			}
		default:
			return state;
	}
}
