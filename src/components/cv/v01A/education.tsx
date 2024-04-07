import { Education } from "@/types/userData";

function Jsx(data: Education) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{data.title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				<div>{data.time}</div>
				<div className='font-bold'>{data.major}</div>
				<div>{data.school}</div>
				<div>{data.status}</div>
			</div>
		</div>
	);
}

export default Jsx;
