import { CvAction, CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

export default ({
	index,
	arrayLength,
	deleteAction,
}: {
	index: number;
	arrayLength: number;
	deleteAction: CvAction;
}) => {
	const { dispatch } = useContext(CvContext);
	return (
		<div className='flex justify-end gap-4 '>
			{index > 0 && (
				<button
					className='text-yellow-600 hover:text-yellow-700 cursor-pointer'
					type='button'
				>
					<BsArrowUp />
				</button>
			)}
			{index < arrayLength - 1 && (
				<button
					className='text-yellow-600 hover:text-yellow-700 cursor-pointer'
					type='button'
				>
					<BsArrowDown />
				</button>
			)}
			<button
				onClick={() => {
					dispatch(deleteAction);
				}}
				className='text-red-400 hover:text-red-500 cursor-pointer'
				type='button'
			>
				<BiTrash />
			</button>
		</div>
	);
};
