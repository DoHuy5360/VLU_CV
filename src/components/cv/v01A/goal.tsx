import { Goal } from "@/types/userData";

function Jsx(data: Goal) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs'>{data.content}</div>
		</div>
	);
}

export default Jsx;
