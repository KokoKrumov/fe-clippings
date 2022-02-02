import {FETCH_ALL_DATA} from "../constants/types";


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_ALL_DATA:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}
