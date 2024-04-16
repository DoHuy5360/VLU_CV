import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";
import ViewLayout from "../viewLayout";
import { addHobbyAction } from "@/entities/addFormCV";
import AddForm from "../addForm";
import FormAction from "../formAction";
import { deleteHobbyAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addHobbyAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.hobby.hobbies.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteHobbyAction(i)}
									arrayLength={state.attrs.hobby.hobbies.length}
									index={i}
								/>
								<EditInput
									label='Name'
									updateType='update-user-hobby-name'
									value={e.name}
									index={i}
								/>
								<EditArea
									label='Status'
									updateType='update-user-hobby-status'
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
