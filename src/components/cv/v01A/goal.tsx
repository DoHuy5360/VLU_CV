import { Goal } from "@/types/userData";

export default (data: Goal) => {
	return (
		data.content.length > 0 && (
			<div className='section flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<div className='font-bold text-nowrap'>{data.title}</div>
					<div className='h-[2px] w-full bg-black'></div>
				</div>
				<div className='text-xs'>{data.content}</div>
			</div>
		)
	);
};
