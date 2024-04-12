import EditInput from "../editInput";
import EditArea from "../editArea";
import Save from "../save";
import { UserData } from "@/types/userData";

export default (state: UserData) => {
	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='text-sm flex gap-2 flex-wrap'>
				{state.attrs.experience.works.map((w, i) => {
					return (
						<div
							key={i}
							className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
						>
							<EditInput
								label='Name'
								updateType='update-user-experience-name'
								value={w.name}
								index={i}
							/>
							<EditInput
								label='Position'
								updateType='update-user-experience-position'
								value={w.name}
								index={i}
							/>
							<EditInput
								label='Time'
								updateType='update-user-experience-time'
								value={w.name}
								index={i}
							/>
							<EditArea
								label='Tasks'
								updateType='update-user-experience-tasks'
								value={w.tasks}
								index={i}
							/>
						</div>
					);
				})}
			</div>
			<Save />
		</div>
	);
};
