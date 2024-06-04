import { Experience } from "@/types/userData";

export default function F(data: Experience) {
	return (
		data.works.length > 0 && (
			<div className='section flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<div className='font-bold text-nowrap'>{data.title}</div>
					<div className='h-[2px] w-full bg-black'></div>
				</div>
				<div className='flex flex-col text-xs'>
					{data.works.map((e, i) => {
						return (
							<div key={e.id} className='grid grid-cols-[100px_auto] gap-10'>
								<div className='flex flex-col gap-1'>
									<div className='font-bold'>{e.name}</div>
									<div className='text-nowrap'>{e.time}</div>
								</div>
								<div className='relative flex flex-col gap-2 pl-3 pb-3 border-l-[1px] border-dashed border-black'>
									<div className='w-2 h-2 rounded-full bg-black absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]'></div>
									<div className='font-bold'>{e.position}</div>
									<div className='whitespace-pre-line'>{e.tasks}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
}
