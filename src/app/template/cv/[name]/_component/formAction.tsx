import { CvAction, CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import { BiTrash } from "react-icons/bi";

export default ({ deleteAction }: { deleteAction: CvAction }) => {
	const { dispatch } = useContext(CvContext);
	return (
		<div className='flex gap-2 text-xs'>
			<div
				onClick={() => {
					dispatch(deleteAction);
				}}
				className='border-[1px] border-slate-200 cursor-pointer p-1 hover:bg-slate-200 text-red-600'
			>
				<BiTrash />
			</div>
		</div>
	);
};
