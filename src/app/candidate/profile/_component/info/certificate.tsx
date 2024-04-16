import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import ViewLayout from "../viewLayout";
import AddForm from "../addForm";
import { addCertificationAction } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { deleteCertificationAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addCertificationAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.certificate.certificates.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteCertificationAction(i)}
									arrayLength={
										state.attrs.certificate.certificates.length
									}
									index={i}
								/>
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
			}
		/>
	);
};
