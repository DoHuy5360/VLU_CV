import { Activity } from "@/types/userData";

export default function Jsx(data: Activity) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='font-bold text-nowrap text-blue-500'>
				{data.title}
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{data.activities.map((a, i) => {
					return (
						<div key={i} className='flex flex-col gap-1'>
							<div>{a.time}</div>
							<div>{a.position}</div>
							<div className='font-bold'>{a.name}</div>

							{a.tasks.map((t, j) => (
								<div key={j}>{t}</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}
