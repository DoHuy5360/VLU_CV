import { UseFieldArrayReturn } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { LuMoveDown, LuMoveUp } from "react-icons/lu";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { Buttons } from "../button/buttons";

export default function FormAction<
	T extends "skills" | "experiences" | "projects" | "about.images" | `experiences.${number}.images` | `projects.${number}.images` | `projects.${number}.technologies`
>({ actions, index, length }: { actions: UseFieldArrayReturn<PortfolioFormData, T>; index: number; length: number }) {
	return (
		<div className='flex gap-2 text-xs items-center'>
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
