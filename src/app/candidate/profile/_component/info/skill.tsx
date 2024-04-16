import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import EditArea from "../editArea";
import ViewLayout from "../viewLayout";
import { addSkillAction } from "@/entities/addFormCV";
import AddForm from "../addForm";
import FormAction from "../formAction";
import { deleteSkillAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addSkillAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.skill.skills.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteSkillAction(i)}
									arrayLength={state.attrs.skill.skills.length}
									index={i}
								/>
								<EditInput
									label='Name'
									updateType='update-user-skill-name'
									value={e.name}
									index={i}
								/>
								<EditArea
									label='Status'
									updateType='update-user-skill-status'
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
