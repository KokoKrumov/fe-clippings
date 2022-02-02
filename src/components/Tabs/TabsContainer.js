import {UserCard} from "../UserCard";

export const TabsContainer = ({employees, departments, selectedEmployees}) => {
	return (
		<div className="tab-pane fade show active" id="pills-homeVertical" role="tabpanel"
			 aria-labelledby="pills-home-tabVertical"
		>
			<div className={'flex flex-wrap gap-x-8 gap-y-4'}>
				{
					employees.map(employee => {
						const {id, name, department, avatar} = employee
						return (
							<UserCard
								key={id}
								avatar={avatar}
								id={id}
								userDepartment={department}
								departments={departments}
								name={name}
								selectedEmployees={selectedEmployees}
							/>
						)
					})
				}
			</div>
		</div>
	)
}
