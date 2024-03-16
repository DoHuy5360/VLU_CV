import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Skill() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.skill.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{state.attrs.skill.skills.map((s, i) => {
					return (
						<div key={i}>
							<div className='font-bold'>{s.name}</div>
							<div>{s.status}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skill;
