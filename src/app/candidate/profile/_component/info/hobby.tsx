import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.hobby.hobbies.map((a, i) => {
				return (
					<div
						key={i}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Name'
							updateType='update-user-hobby-name'
							value={a.name}
							index={i}
						/>
						<EditArea
							label='Status'
							updateType='update-user-hobby-status'
							value={a.status}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
