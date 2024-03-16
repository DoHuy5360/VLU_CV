import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Head() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex flex-col gap-3'>
				<div className='w-36 h-3w-36 rounded-full overflow-hidden'>
					<img
						src={state.attrs.head.avatar}
						alt='avatar'
						draggable='false'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<div className='text-2xl font-bold' id='userName'>
						{state.attrs.head.name}
					</div>
					<div>{state.attrs.head.position}</div>
				</div>
			</div>
		</div>
	);
}

export default Head;
