import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Activity() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.activity.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{state.attrs.activity.activities.map((a, i) => {
					return (
						<div key={i}>
							<div>{a.time}</div>
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
