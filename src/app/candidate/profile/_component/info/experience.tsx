import EditInput from "../editInput";
import EditArea from "../editArea";
import { UserData } from "@/types/userData";
import { BiTrash } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import AddForm from "../addForm";

export default (state: UserData, dispatch: Function) => {
	return (
		<div className='flex flex-col'>
			<div className='flex gap-2 text-sm py-2 justify-end'>
				<AddForm
					actionType='add-experience'
					value={{
						id: new Date().getTime(),
						name: "",
						time: "",
						position: "",
						tasks: "",
					}}
				/>
			</div>
			<div className='text-sm flex flex-col gap-2 flex-wrap'>
				{state.attrs.experience.works.length === 0 ? (
					<div className=''>
						* Hãy sắp xếp thứ tự kinh nghiệm hợp lý
					</div>
				) : (
					state.attrs.experience.works.map((e, i) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
							>
								<div className='flex justify-end gap-4 '>
									{i > 0 && (
										<button
											className='text-yellow-600 hover:text-yellow-700 cursor-pointer'
											type='button'
										>
											<BsArrowUp />
										</button>
									)}
									{i < state.attrs.experience.works.length - 1 && (
										<button
											className='text-yellow-600 hover:text-yellow-700 cursor-pointer'
											type='button'
										>
											<BsArrowDown />
										</button>
									)}
									<button
										onClick={() => {
											dispatch({
												type: "delete-experience",
												value: "",
												index: i,
											});
										}}
										className='text-red-400 hover:text-red-500 cursor-pointer'
										type='button'
									>
										<BiTrash />
									</button>
								</div>
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
		</div>
	);
};
