import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
	const { state } = useContext(CvContext);

	return (
		<div className='relative'>
			<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
				<FaGraduationCap />
			</div>
			<div className='p-3 pl-8 section flex flex-col gap-2'>
				<div className='font-bold text-nowrap text-blue-500'>
					{state.attrs.education.title}
				</div>
				<div className='text-xs flex flex-col gap-2'>
					<div className='flex gap-1 font-bold'>
						<div>{state.attrs.education.school}</div>
						<div>|</div>
						<div>{state.attrs.education.time}</div>
					</div>
					<div className='font-bold'>
						{state.attrs.education.major}
					</div>
					<div>{state.attrs.education.status}</div>
				</div>
			</div>
		</div>
	);
}

export default Education;
