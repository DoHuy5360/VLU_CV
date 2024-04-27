import { Badge } from "@/types/userData";

export default (data: Badge) => {
	return (
		data.achievements.length > 0 && (
			<div className='section flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<div className='font-bold text-nowrap'>{data.title}</div>
					<div className='h-[2px] w-full bg-black'></div>
				</div>
				<div className='text-xs flex flex-col gap-2'>
					{data.achievements.map((e, i) => {
						return (
							<div key={e.id}>
								<div>{e.time}</div>
								<div className='font-bold'>{e.name}</div>
								<div>{e.where}</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
};
