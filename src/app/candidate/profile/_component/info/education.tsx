import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import ViewLayout from "../viewLayout";
import { addEducationAction } from "@/entities/addFormCV";
import AddForm from "../addForm";
import FormAction from "../formAction";
import { deleteEducationAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addEducationAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.education.classes.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteEducationAction(i)}
									arrayLength={state.attrs.education.classes.length}
									index={i}
								/>
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
			}
		/>
	);
};
