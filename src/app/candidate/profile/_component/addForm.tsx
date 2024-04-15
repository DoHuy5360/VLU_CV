import { CvAction } from "@/contexts/cvProvider";
import { useAddCvForm } from "@/hooks/useAddCvForm";

export default ({ data }: { data: CvAction }) => {
	const { f } = useAddCvForm(data);
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
