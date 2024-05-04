import { Head } from "@/types/userData";

export default function F(data: Head) {
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex flex-col'>
				<div className='text-2xl font-bold'>{data.name}</div>
				{data.position}
			</div>
			<div className='flex flex-col gap-2 p-2 border-black border-l-2 pl-2 text-xs'>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-phone'></i>
					<div className='flex gap-1'>
						<div>Phone:</div>
						{data.phone}
					</div>
				</div>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-envelope'></i>
					<div className='flex gap-1'>
						<div>Email:</div>
						{data.email}
					</div>
				</div>
				{data.address.length > 0 && (
					<div className='flex gap-2 items-center'>
						<i className='fa-solid fa-location-dot'></i>
						<div className='flex gap-1'>
							<div>Address:</div>
							{data.address}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
