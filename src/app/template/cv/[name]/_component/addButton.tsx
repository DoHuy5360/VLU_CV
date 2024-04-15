import { CvAction } from "@/contexts/cvProvider";
import { useAddCvForm } from "@/hooks/useAddCvForm";
import { BiPlus } from "react-icons/bi";

export default ({ data }: { data: CvAction }) => {
	const { f } = useAddCvForm(data);
	return (
		<div
			onClick={f}
			className='p-1 rounded-sm border-[1px] border-slate-300 cursor-pointer hover:bg-slate-200'
		>
			<BiPlus />
		</div>
	);
};
