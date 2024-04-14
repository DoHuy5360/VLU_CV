import { UserData } from "@/types/userData";
import EditInput from "../editInput";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.certificate.certificates.map((e, i) => {
				return (
					<div
						key={e.id}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Name'
							updateType='update-user-experience-name'
							value={e.name}
							index={i}
						/>
						<EditInput
							label='Time'
							updateType='update-user-experience-name'
							value={e.time}
							index={i}
						/>
						<EditInput
							label='Where'
							updateType='update-user-experience-name'
							value={e.where}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
