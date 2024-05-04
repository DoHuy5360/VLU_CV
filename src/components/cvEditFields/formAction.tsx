import { UseFieldArrayRemove } from "react-hook-form";
import { BiTrash } from "react-icons/bi";

export default function FormAction({ deleteAction, index }: { deleteAction: UseFieldArrayRemove; index: number }) {
	return (
		<div className='flex gap-2 text-xs'>
			<div
				onClick={() => {
					deleteAction(index);
				}}
				className='border-[1px] border-slate-200 cursor-pointer p-1 hover:bg-slate-200 text-red-600'
			>
				<BiTrash />
			</div>
		</div>
	);
}
