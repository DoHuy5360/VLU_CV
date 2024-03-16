import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Hobby() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.hobby.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{state.attrs.hobby.hobbies.map((h, i) => {
					return (
						<div key={i}>
							<div className='font-bold'>{h.name}</div>
							<div>{h.status}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Hobby;
