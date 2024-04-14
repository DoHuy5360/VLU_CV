import { CvActionType, CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

export default ({
	actionType,
	value,
	index,
}: {
	actionType: CvActionType;
	value: object;
	index?: number;
}) => {
	const { dispatch } = useContext(CvContext);
	return (
		<button
			onClick={() => {
				dispatch({
					type: actionType,
					value,
					index: index || 0,
				});
			}}
			className='px-2 py-1 bg-blue-300 rounded-sm'
			type='button'
		>
			Add
		</button>
	);
};
