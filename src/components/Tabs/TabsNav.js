import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {markDepartments, fetchDepartments} from "../../actions";

export const TabsNav = ({departments}) => {

	const dispatch = useDispatch();
	const {selectDepartments} = bindActionCreators(markDepartments, dispatch);
	const {filterDepartments} = bindActionCreators(fetchDepartments, dispatch);

	const showDepartments = (dep) => {
		filterDepartments(dep);
	}

	const checkedDepartments = (dep) => {
		selectDepartments(dep)
	}

	return (
		<>
			<div className={'mb-10'}>
				<h4 className={'font-medium leading-tight text-2xl mt-0 mb-4 text-blue-600'}>Show employees by:</h4>
				<ul className=" nav nav-pills flex flex-col items-start list-none pl-0 mr-4"
					id="pills-tabVertical"
					role="tablist"
				>
					<li className="nav-item text-center mb-2" role="presentation">
						<button type="button"
								className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								onClick={() => showDepartments({id: 0, name: 'All Departments'})}
						>
							All Departments
						</button>
					</li>
					{departments && departments.map(dep => {
						const {id, name} = dep;
						return (
							<li key={id} className="nav-item text-center my-2" role="presentation">
								<button type="button"
										className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => showDepartments(dep)}
								>
									{name}
								</button>
							</li>
						)
					})}

				</ul>
			</div>
			<div className={'mb-10'}>
				<h4 className={'font-medium leading-tight text-2xl mt-0 mb-4 text-blue-600'}>Select employees by:</h4>
				<ul className=" nav nav-pills flex flex-col items-start list-none pl-0 mr-4"
					id="pills-tabVertical"
					role="tablist"
				>
					<li className="nav-item text-center mb-2" role="presentation">
						<button type="button"
								className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								onClick={() => checkedDepartments({id: 0, name: 'All Departments'})}
						>
							All Employees
						</button>
					</li>
					{departments && departments.map(dep => {
						const {id, name} = dep;
						return (
							<li key={id} className="nav-item text-center my-2" role="presentation">
								<button type="button"
										className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										onClick={() => checkedDepartments(dep)}
								>
									{name}
								</button>
							</li>
						)
					})}
					<li className="nav-item text-center mb-2" role="presentation">
						<button type="button"
								className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
								onClick={() => checkedDepartments({id: -1, name: 'Reset Departments'})}
						>
							Reset Selections
						</button>
					</li>

				</ul>
			</div>
		</>
	)
}
