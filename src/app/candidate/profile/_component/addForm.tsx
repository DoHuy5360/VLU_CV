import { CvAction, CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

export default ({ data }: { data: CvAction }) => {
	const { dispatch } = useContext(CvContext);
	return (
		<button
			onClick={() => {
				dispatch(data);
			}}
			className='px-2 py-1 bg-blue-300 rounded-sm'
			type='button'
		>
			Add
		</button>
	);
};
