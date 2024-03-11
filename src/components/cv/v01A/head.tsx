export type HeadProps = {
	name: String;
	position: String;
	phone: String;
	email: String;
	address: String;
};

function Head({ name, position, phone, email, address }: HeadProps) {
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex flex-col'>
				<div className='text-2xl font-bold' id='userName'>
					{name}
				</div>
				<div>{position}</div>
			</div>
			<div className='flex flex-col gap-2 p-2 border-black border-l-2 pl-2 text-xs'>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-phone'></i>
					<div className='flex gap-1'>
						<div>Phone:</div>
						<div>{phone}</div>
					</div>
				</div>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-envelope'></i>
					<div className='flex gap-1'>
						<div>Email:</div>
						<div>{email}</div>
					</div>
				</div>
				<div className='flex gap-2 items-center'>
					<i className='fa-solid fa-location-dot'></i>
					<div className='flex gap-1'>
						<div>Address:</div>
						<div>{address}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Head;
