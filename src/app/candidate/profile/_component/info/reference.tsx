import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import ViewLayout from "../viewLayout";
import { addReferenceAction } from "@/entities/addFormCV";
import AddForm from "../addForm";
import FormAction from "../formAction";
import { deleteReferenceAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addReferenceAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.reference.references.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteReferenceAction(i)}
									arrayLength={
										state.attrs.reference.references.length
									}
									index={i}
								/>
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
			}
		/>
	);
};
