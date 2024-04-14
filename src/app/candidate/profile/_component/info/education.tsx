import { UserData } from "@/types/userData";
import EditInput from "../editInput";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.education.classes.map((c, i) => {
				return (
					<div
						key={i}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Time'
							updateType='update-user-education-time'
							value={c.time}
							index={i}
						/>
						<EditInput
							label='Major'
							updateType='update-user-education-major'
							value={c.major}
							index={i}
						/>
						<EditInput
							label='School'
							updateType='update-user-education-school'
							value={c.school}
							index={i}
						/>
						<EditInput
							label='Status'
							updateType='update-user-education-status'
							value={c.status}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
