import {TabsContainer} from "./TabsContainer";
import {TabsNav} from "./TabsNav";


export const Tabs = ({employees, departments, selectedEmployees}) => {

	return (
		<>
			<div className="flex gap-8">
				<div className={'w-1/5'}>
					<TabsNav departments={departments}/>
				</div>
				<div className="tab-content w-5/6">
					<TabsContainer
						employees={employees}
						departments={departments}
						selectedEmployees={selectedEmployees}
					/>
				</div>
			</div>
		</>
	)
}
