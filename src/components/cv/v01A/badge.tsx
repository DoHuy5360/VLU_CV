import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Badge() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.badge.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{state.attrs.badge.achievements.map((a, i) => {
					return (
						<div key={i}>
							<div>{a.time}</div>
							<div className='font-bold'>{a.name}</div>
							<div>{a.where}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Badge;
