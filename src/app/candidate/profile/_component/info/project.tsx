import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.project.products.map((p, i) => {
				return (
					<div
						key={i}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Name'
							updateType='update-user-experience-name'
							value={p.name}
							index={i}
						/>
						<EditInput
							label='Time'
							updateType='update-user-experience-time'
							value={p.time}
							index={i}
						/>
						<EditInput
							label='Where'
							updateType='update-user-experience-where'
							value={p.where}
							index={i}
						/>
						<EditInput
							label='Member'
							updateType='update-user-experience-member'
							value={p.member}
							index={i}
						/>
						<EditInput
							label='Position'
							updateType='update-user-experience-position'
							value={p.position}
							index={i}
						/>
						<EditArea
							label='Tasks'
							updateType='update-user-experience-tasks'
							value={p.tasks}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
