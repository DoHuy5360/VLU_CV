import { Head } from "@/types/userData";

export default (data: Head) => {
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex flex-col gap-3'>
				<div className='w-36 h-3w-36 rounded-full overflow-hidden'>
					<img src={data.avatar} alt='avatar' draggable='false' />
				</div>
				<div className='flex flex-col gap-1'>
					<div className='text-2xl font-bold' id='userName'>
						{data.name}
					</div>
					<div>{data.position}</div>
				</div>
			</div>
		</div>
	);
};
