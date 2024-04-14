import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.project.products.map((e, i) => {
				return (
					<div
						key={e.id}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Name'
							updateType='update-user-project-name'
							value={e.name}
							index={i}
						/>
						<EditInput
							label='Time'
							updateType='update-user-project-time'
							value={e.time}
							index={i}
						/>
						<EditInput
							label='Where'
							updateType='update-user-project-where'
							value={e.where}
							index={i}
						/>
						<EditInput
							label='Member'
							updateType='update-user-project-member'
							value={e.member}
							index={i}
						/>
						<EditInput
							label='Position'
							updateType='update-user-project-position'
							value={e.position}
							index={i}
						/>
						<EditArea
							label='Tasks'
							updateType='update-user-project-tasks'
							value={e.tasks}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
