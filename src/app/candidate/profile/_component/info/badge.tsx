import { UserData } from "@/types/userData";
import EditInput from "../editInput";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.badge.achievements.map((a, i) => {
				return (
					<div
						key={i}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Name'
							updateType='update-user-badge-name'
							value={a.name}
							index={i}
						/>
						<EditInput
							label='Time'
							updateType='update-user-badge-time'
							value={a.time}
							index={i}
						/>
						<EditInput
							label='Where'
							updateType='update-user-badge-where'
							value={a.where}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
