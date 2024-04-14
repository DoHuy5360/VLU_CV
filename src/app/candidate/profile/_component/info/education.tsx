import { UserData } from "@/types/userData";
import EditInput from "../editInput";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.education.classes.map((e, i) => {
				return (
					<div
						key={e.id}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Time'
							updateType='update-user-education-time'
							value={e.time}
							index={i}
						/>
						<EditInput
							label='Major'
							updateType='update-user-education-major'
							value={e.major}
							index={i}
						/>
						<EditInput
							label='School'
							updateType='update-user-education-school'
							value={e.school}
							index={i}
						/>
						<EditInput
							label='Status'
							updateType='update-user-education-status'
							value={e.status}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
