import { Reference } from "@/types/userData";

export default function Jsw(data: Reference) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{data.references.map((r, i) => {
					return (
						<div key={i}>
							<div>{r.name}</div>
							<div>{r.where}</div>
							<div>{r.phone}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
