import { UseFieldArrayReturn } from "react-hook-form";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import { UserDataForm } from "../view/editCV/_component/editCvForm";
import { Buttons } from "../button/buttons";

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
		<div className='flex gap-2 text-xs justify-start'>
			<div
				onClick={() => {
					actions.remove(index);
				}}
			>
				<Buttons.Delete.Click.Icon />
			</div>
			{index >= 0 && index < length - 1 && (
				<div
					onClick={() => {
						actions.move(index, index + 1);
					}}
				>
					<Buttons.Move.Down.Icon />
				</div>
			)}
			{index < length && index > 0 && (
				<div
					onClick={() => {
						actions.move(index, index - 1);
					}}
				>
					<Buttons.Move.Up.Icon />
				</div>
			)}
		</div>
	);
}
