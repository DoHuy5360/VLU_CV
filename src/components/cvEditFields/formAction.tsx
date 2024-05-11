import { UseFieldArrayReturn } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import { UserDataForm } from "../view/editCV/_component/editCvForm";

export default function FormAction<
	T extends
		| "attrs.experience.works"
		| "attrs.project.products"
		| "attrs.education.classes"
		| "attrs.skill.skills"
		| "attrs.badge.achievements"
		| "attrs.certificate.certificates"
		| "attrs.reference.references"
		| "attrs.activity.activities"
		| "attrs.hobby.hobbies"
>({ actions, index, length }: { actions: UseFieldArrayReturn<UserDataForm, T>; index: number; length: number }) {
	return (
		<div className='flex gap-2 text-xs'>
			<div
				onClick={() => {
					actions.remove(index);
				}}
				className='border-[1px] border-slate-200 cursor-pointer p-1 hover:bg-slate-200 text-red-600'
			>
				<BiTrash />
			</div>
			{index >= 0 && index < length - 1 && (
				<div
					onClick={() => {
						actions.move(index, index + 1);
					}}
					className='border-[1px] border-slate-200 cursor-pointer p-1 hover:bg-slate-200 text-red-600'
				>
					<LuMoveDown />
				</div>
			)}
			{index < length && index > 0 && (
				<div
					onClick={() => {
						actions.move(index, index - 1);
					}}
					className='border-[1px] border-slate-200 cursor-pointer p-1 hover:bg-slate-200 text-red-600'
				>
					<LuMoveUp />
				</div>
			)}
		</div>
	);
}
