import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";
import ViewLayout from "../viewLayout";
import { addActivityAction } from "@/entities/addFormCV";
import AddForm from "../addForm";
import FormAction from "../formAction";
import { deleteActivityAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addActivityAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.activity.activities.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteActivityAction(i)}
									arrayLength={state.attrs.activity.activities.length}
									index={i}
								/>
								<EditInput
									label='Time'
									updateType='update-user-experience-time'
									value={e.time}
									index={i}
								/>
								<EditInput
									label='Name'
									updateType='update-user-experience-name'
									value={e.name}
									index={i}
								/>
								<EditInput
									label='Position'
									updateType='update-user-experience-position'
									value={e.position}
									index={i}
								/>
								<EditArea
									label='Tasks'
									updateType='update-user-experience-tasks'
									value={e.tasks}
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
