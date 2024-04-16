import { CvAction, CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import { BiPlus } from "react-icons/bi";

export default ({ data }: { data: CvAction }) => {
	const { dispatch } = useContext(CvContext);
	return (
		<div
			onClick={() => {
				dispatch(data);
			}}
			className='p-1 rounded-sm border-[1px] border-slate-300 cursor-pointer hover:bg-slate-200'
		>
			<BiPlus />
		</div>
	);
};
