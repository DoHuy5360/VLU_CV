import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Activity() {
	const { state } = useContext(CvContext);

	return (
		<div className='section flex flex-col gap-2'>
			<div className='font-bold text-nowrap text-blue-500'>
				{state.attrs.activity.title}
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{state.attrs.activity.activities.map((a, i) => {
					return (
						<div key={i} className='flex flex-col gap-1'>
							<div>{a.time}</div>
							<div>{a.position}</div>
							<div className='font-bold'>{a.name}</div>

							{a.tasks.map((t, j) => (
								<div key={j}>{t}</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Activity;
