import { Experience } from "@/types/userData";

export default (data: Experience) => {
	return (
		data.works.length > 0 && (
			<div className='section flex flex-col gap-2'>
				<div className='font-bold text-nowrap text-blue-500'>{data.title}</div>
				<div className='flex flex-col gap-4 text-xs'>
					{data.works.map((w, i) => {
						return (
							<div key={i} className='flex flex-col gap-1'>
								<div className='text-nowrap'>{w.time}</div>
								<div className='font-bold'>{w.position}</div>
								<div className='font-bold'>{w.name}</div>
								<div className='whitespace-pre-line'>{w.tasks}</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
};
