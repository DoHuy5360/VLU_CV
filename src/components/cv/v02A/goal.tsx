import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Goal() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='text-2xl text-slate-300'>
				<FaQuoteLeft />
			</div>
			<div className='text-xs text-justify'>
				{state.attrs.goal.content}
			</div>
		</div>
	);
}

export default Goal;
