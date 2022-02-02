export const departmentToBeSelected = (organization, selectDepartment) => {
	return organization['employees'].map(emp => {
		if (selectDepartment === 0) {
			return {
				id: emp['id'],
				isChecked: true
			}
		} else if (selectDepartment === -1) {
			return {
				id: emp['id'],
				isChecked: false
			}
		} else {
			return {
				id: emp['id'],
				isChecked: selectDepartment === emp['department']
			}
		}
	})
}

export const employeesToBeSelected = (selectedEmployees, selectEmployee) => {
	return selectedEmployees.map(emp => {
		if (emp['id'] === selectEmployee['id']) {
			return {
				isChecked: !emp['isChecked'],
				...selectEmployee
			}
		} else {
			return {
				...emp
			}
		}

	})
}

//FILTER for THE EMPLOYEES BY DEPARTMENT
export const filtrateEmployees = (employees, department, organization) => {

	if (Object.keys(department).length === 0 || department.id === 0) {
		return{
			employees: organization.employees,
			departments: organization.departments
		}
	} else {
		let empArr = [];
		let depArr = [];
		employees.map(emp => {
			if (emp['department'] === department.id) {
				empArr.push(emp)
			}
		});
		depArr.push(department);
		return {
			departments: depArr,
			employees: empArr,
		}
	}
}
