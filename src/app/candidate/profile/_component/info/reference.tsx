import { UserData } from "@/types/userData";
import EditInput from "../editInput";

export default (data: UserData) => {
	return (
		<div className='text-sm flex gap-2 flex-wrap'>
			{data.attrs.reference.references.map((e, i) => {
				return (
					<div
						key={i}
						className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
					>
						<EditInput
							label='Name'
							updateType='update-user-reference-name'
							value={e.name}
							index={i}
						/>
						<EditInput
							label='Where'
							updateType='update-user-reference-where'
							value={e.where}
							index={i}
						/>
						<EditInput
							label='Phone'
							updateType='update-user-reference-phone'
							value={e.phone}
							index={i}
						/>
					</div>
				);
			})}
		</div>
	);
};
