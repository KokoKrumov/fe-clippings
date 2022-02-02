import {
	FETCH_ALL_DATA,
	FETCH_DATA_ERROR
} from "../constants/types";
import request from "../api/request";

export const fetchData = () => async dispatch => {
	await request.get('./data.json')
		.then(response => {
			dispatch({
				type: FETCH_ALL_DATA,
				payload: response.data
			})
		})
		.catch(error =>{
			dispatch({
				type: FETCH_DATA_ERROR,
				payload: error.response
			})
			console.log('employees error: ', error.response);
		})

}
