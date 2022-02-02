import {getAllData} from "../actions"
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from "redux";
import {BoardTitle} from "./Titles/BoardTitle";
import {MainTitle} from "./Titles/MainTitle";
import {SmContainer} from "./Containers/SmContainer";
import {DepartmentsTitle} from "./Titles/DepartmentsTitle";
import {Tabs} from "./Tabs";
import {departmentToBeSelected, employeesToBeSelected, filtrateEmployees} from "../functions";


export const Board = () => {
	const {data, filterDepartments, selectDepartments, selectEmployee} = useSelector(state => state)
	const dispatch = useDispatch();
	const {fetchData} = bindActionCreators(getAllData, dispatch);
	const [departmentFilter, setDepartmentFilter] = useState([{id: 0, name: 'All Departments'}]);
	const [organization, setOrganization] = useState({
		name: '',
		departments: [],
		employees: [],
	});
	const [filtratedOrganization, setFiltratedOrganization] = useState({
		departments: [],
		employees: [],
	});
	const [selectedEmployees, setSelectedEmployees] = useState([])


	// GET ORGANIZATION DATA REQUEST
	useEffect(() => {
		fetchData()
	}, []);

	// SET ORGANIZATION DATA AND GENERATE CHECK LIST
	useEffect(() => {
		setOrganization(data['organization']);

		data['organization'] && setSelectedEmployees(data['organization']['employees'].map(emp => {
			return {
				isChecked: false,
				id: emp['id'],
				name: emp['name'],
				department: emp['department'],
			}
		}));
	}, [data]);

	useEffect(() => {
		if (organization) {
			setSelectedEmployees(departmentToBeSelected(organization, selectDepartments['id']))
		}
	}, [selectDepartments]);

	useEffect(() => {
		setSelectedEmployees(employeesToBeSelected(selectedEmployees, selectEmployee));
	}, [selectEmployee]);


	// GET ORGANIZATION DATA AND SET FILTER FOR THE EMPLOYEES
	// FILTRATE THE EMPLOYEES WHEN THERE IS A FILTER
	useEffect(() => {
		organization &&
		setFiltratedOrganization(filtrateEmployees(organization.employees, filterDepartments, organization))
	}, [organization, departmentFilter]);

	// SET NEW FILTER FOR THE EMPLOYEES
	useEffect(() => {
		filterDepartments && setDepartmentFilter(filterDepartments);
	}, [filterDepartments]);

	return (
		<>
			<div>
				{
					filtratedOrganization && organization ?
						<SmContainer>
							<p>Please start here(components/Boards.js)</p>
							<div className={'mt-10 mx-4 pb-5'}>
								<MainTitle>
									Organization name: {organization.name}
								</MainTitle>
								<DepartmentsTitle departments={filtratedOrganization.departments}/>
							</div>
							<div className={'p-4'}>
								<div className={'shadow-lg rounded-lg overflow-hidden'}>
									<div className={'py-3 px-5 bg-gray-50'}>
										<BoardTitle>
											Employee Board
										</BoardTitle>
									</div>
									<div className={'p-10'}>
										<Tabs employees={filtratedOrganization.employees}
											  departments={organization.departments}
											  selectedEmployees={selectedEmployees}
										/>
									</div>
								</div>
							</div>
						</SmContainer> :
						<p>Loading...</p>
				}
			</div>
		</>
	)
};


