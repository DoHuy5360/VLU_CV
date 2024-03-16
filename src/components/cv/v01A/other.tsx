import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Other() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.other.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{state.attrs.other.content}
			</div>
		</div>
	);
}

export default Other;
