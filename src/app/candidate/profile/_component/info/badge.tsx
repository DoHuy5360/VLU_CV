import { UserData } from "@/types/userData";
import EditInput from "../editInput";
import ViewLayout from "../viewLayout";
import { addBadgeAction } from "@/entities/addFormCV";
import AddForm from "../addForm";
import FormAction from "../formAction";
import { deleteBadgeAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addBadgeAction()} />}
			view={
				<div className='text-sm flex gap-2 flex-wrap'>
					{state.attrs.badge.achievements.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<FormAction
									deleteAction={deleteBadgeAction(i)}
									arrayLength={state.attrs.badge.achievements.length}
									index={i}
								/>
								<EditInput
									label='Name'
									updateType='update-user-badge-name'
									value={e.name}
									index={i}
								/>
								<EditInput
									label='Time'
									updateType='update-user-badge-time'
									value={e.time}
									index={i}
								/>
								<EditInput
									label='Where'
									updateType='update-user-badge-where'
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
