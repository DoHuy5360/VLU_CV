import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Education() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.education.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				<div>{state.attrs.education.time}</div>
				<div className='font-bold'>{state.attrs.education.major}</div>
				<div>{state.attrs.education.school}</div>
				<div>{state.attrs.education.status}</div>
			</div>
		</div>
	);
}

export default Education;
