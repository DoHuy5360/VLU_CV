import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import Save from "../save";

export default (data: UserData) => {
	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='text-sm flex gap-2 flex-wrap'>
				{data.attrs.badge.achievements.map((a, i) => {
					return (
						<div
							key={i}
							className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
						>
							<EditInput
								label='Name'
								updateType='update-user-experience-name'
								value={a.name}
								index={i}
							/>
							<EditInput
								label='Time'
								updateType='update-user-experience-time'
								value={a.time}
								index={i}
							/>
							<EditInput
								label='Where'
								updateType='update-user-experience-where'
								value={a.where}
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
