import EditInput from "../editInput";
import EditArea from "../editArea";
import { UserData } from "@/types/userData";
import { BiTrash } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import AddForm from "../addForm";
import { addExperienceAction } from "@/entities/addFormCV";
import ViewLayout from "../viewLayout";
import FormAction from "../formAction";
import { deleteExperienceAction } from "@/entities/deleteFormCV";

export default (state: UserData) => {
	return (
		<ViewLayout
			action={<AddForm data={addExperienceAction()} />}
			view={
				<div className='text-sm flex flex-col gap-2 flex-wrap'>
					{state.attrs.experience.works.length === 0 ? (
						<div className=''>
							* Hãy sắp xếp kinh nghiệm gần đây lên đầu danh sách
						</div>
					) : (
						state.attrs.experience.works.map((e, i) => {
							return (
								<div
									key={e.id}
									className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
								>
									<FormAction
										deleteAction={deleteExperienceAction(i)}
										arrayLength={state.attrs.experience.works.length}
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
									<EditInput
										label='Time'
										updateType='update-user-experience-time'
										value={e.time}
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
						})
					)}
				</div>
			}
		/>
	);
};
