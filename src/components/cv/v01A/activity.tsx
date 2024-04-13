import { Activity } from "@/types/userData";

export default function Jsx(data: Activity) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{data.activities.map((a, i) => {
					return (
						<div key={i}>
							<div>{a.time}</div>
							<div className='font-bold'>{a.name}</div>

							{a.tasks}
						</div>
					);
				})}
			</div>
		</div>
	);
}
