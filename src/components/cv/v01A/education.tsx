import { Education } from "@/types/userData";

function Jsx(data: Education) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='flex flex-col gap-2'>
				{data.classes.map((c, i) => {
					return (
						<div key={i} className='text-xs flex flex-col gap-1'>
							<div className='font-bold'>{c.major}</div>
							<div>{c.time}</div>
							<div>{c.school}</div>
							<div>{c.status}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Jsx;
