import { Experience } from "@/types/userData";

function Jsx(data: Experience) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='flex flex-col text-xs'>
				{data.works.map((w, i) => {
					return (
						<div
							key={i}
							className='grid grid-cols-[100px_auto] gap-10'
						>
							<div className='flex flex-col gap-1'>
								<div className='font-bold'>{w.name}</div>
								<div className='text-nowrap'>{w.time}</div>
							</div>
							<div className='relative flex flex-col gap-2 pl-3 pb-3 border-l-[1px] border-dashed border-black'>
								<div className='w-2 h-2 rounded-full bg-black absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]'></div>
								<div className='font-bold'>{w.position}</div>
								<div className='whitespace-pre-line'>{w.tasks}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Jsx;
