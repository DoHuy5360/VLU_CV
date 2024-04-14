import { CvActionType, CvContext } from "@/contexts/cvProvider";
import { useAddCvForm } from "@/hooks/useAddCvForm";

export default ({
	actionType,
	value,
	index,
}: {
	actionType: CvActionType;
	value: object;
	index?: number;
}) => {
	const { f } = useAddCvForm({
		type: actionType,
		value,
		index: index || 0,
	});
	return (
		<button
			onClick={f}
			className='px-2 py-1 bg-blue-300 rounded-sm'
			type='button'
		>
			Add
		</button>
	);
};
