import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Goal() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.goal.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs'>{state.attrs.goal.content}</div>
		</div>
	);
}

export default Goal;
