import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Experience() {
	const { state } = useContext(CvContext);

	return (
		<div className='section flex flex-col gap-2'>
			<div className='font-bold text-nowrap text-blue-500'>
				{state.attrs.experience.title}
			</div>
			<div className='flex flex-col gap-4 text-xs'>
				{state.attrs.experience.works.map((w, i) => {
					return (
						<div key={i} className='flex flex-col gap-1'>
							<div className='text-nowrap'>{w.time}</div>
							<div className='font-bold'>{w.position}</div>
							<div className='font-bold'>{w.name}</div>
							<div>{w.tasks}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Experience;
