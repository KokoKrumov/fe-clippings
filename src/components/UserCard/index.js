import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {markEmployee} from "../../actions";

export const UserCard = ({avatar, id, name, userDepartment, departments, selectedEmployees}) => {

	const dispatch = useDispatch()
	const {selectEmployee} = bindActionCreators(markEmployee, dispatch);

	const [isChecked, setIsChecked] = useState(false);

	let departmentObj, departmentName;
	if (userDepartment) {
		departmentObj = departments.find(el => el.id === userDepartment);
		departmentName = departmentObj.name;
	}
	useEffect(() => {
		if (selectedEmployees.length) {
			const employee =  selectedEmployees.find(emp => emp['id'] === id);
			setIsChecked(employee['isChecked'])
		}
	}, [selectedEmployees]);

	const selectUser = () => {
		selectEmployee({
			id: id,
			name: name,
			department: departmentObj ? departmentObj.id : undefined,
		})
	}

	return (
		<div
			onClick={() => selectUser()}
			className={`cursor-pointer block p-6 rounded-lg shadow-lg bg-white max-w-sm ${isChecked && 'bg-blue-800'}`}
		>
			<input onChange={()=>{selectUser()}} type="checkbox" id={id} checked={isChecked} name={name} value={id}
				   className="opacity-0 absolute h-auto w-auto"/>
			<div className="text-center">
				<img
					src={avatar}
					className="rounded-full w-32 mb-4 mx-auto"
					alt={name}
				/>
				<h5 className={`text-xl font-medium leading-tight mb-2 ${isChecked && 'text-white'}`}>{name}</h5>
				{
					departmentName &&
					<p className={`${isChecked ? 'text-white' : 'text-gray-500'}`}>{departmentName.slice(0, -1)}</p>
				}
			</div>
		</div>
	)
}
