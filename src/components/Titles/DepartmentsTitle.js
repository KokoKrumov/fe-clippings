export const DepartmentsTitle = ({departments}) => {

	const renderTitle = departments.length > 1 ? "Departments: ": "Department: ";

	const returnDepartmentsTitle = () => {
		return departments.map((dep, i, arr) => {
			return arr.length - 1 === i ? ` ${dep.name}` : `${dep.name}`;
		})
	}

	return (
		<h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
			{`${renderTitle} ${returnDepartmentsTitle()}`}
		</h3>
	)
}
