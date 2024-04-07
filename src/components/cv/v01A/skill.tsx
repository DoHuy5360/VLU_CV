import { CvContext } from "@/contexts/cvProvider";
import { Skill } from "@/types/userData";

function Jsx(data: Skill) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{data.skills.map((s, i) => {
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

export default Jsx;
