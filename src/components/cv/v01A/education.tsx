import { Education } from "@/types/userData";

export default (data: Education) => {
	return (
		data.classes.length > 0 && (
			<div className='section flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<div className='font-bold text-nowrap'>{data.title}</div>
					<div className='h-[2px] w-full bg-black'></div>
				</div>
				<div className='flex flex-col gap-2'>
					{data.classes.map((e, i) => {
						return (
							<div key={e.id} className='text-xs flex flex-col gap-1'>
								<div className='font-bold'>{e.major}</div>
								<div>{e.time}</div>
								<div>{e.school}</div>
								<div>{e.status}</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
};
