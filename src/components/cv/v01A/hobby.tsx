import { Hobby } from "@/types/userData";

export default function Jsx(data: Hobby) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{data.hobbies.map((h, i) => {
					return (
						<div key={i}>
							<div className='font-bold'>{h.name}</div>
							<div>{h.status}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
