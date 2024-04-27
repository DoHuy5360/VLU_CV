import { Activity } from "@/types/userData";

export default (data: Activity) => {
	return (
		data.activities.length > 0 && (
			<div className='section flex flex-col gap-2'>
				<div className='font-bold text-nowrap text-blue-500'>{data.title}</div>
				<div className='text-xs flex flex-col gap-2'>
					{data.activities.map((a, i) => {
						return (
							<div key={i} className='flex flex-col gap-1'>
								<div>{a.time}</div>
								<div>{a.position}</div>
								<div className='font-bold'>{a.name}</div>
								<div className='whitespace-pre-line'>{a.tasks}</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
};
