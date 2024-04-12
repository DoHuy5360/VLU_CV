import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";
import Save from "../save";

export default (data: UserData) => {
	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='text-sm flex gap-2 flex-wrap'>
				{data.attrs.certificate.certificates.map((p, i) => {
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
								updateType='update-user-experience-name'
								value={p.time}
								index={i}
							/>
							<EditInput
								label='Where'
								updateType='update-user-experience-name'
								value={p.where}
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
