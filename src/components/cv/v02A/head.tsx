export type HeadProps = {
	name: string;
	avatar: string;
	position: string;
	phone: string;
	email: string;
	address: string;
};

function Head({ name, avatar, position }: HeadProps) {
	return (
		<div className='section flex gap-2 justify-between'>
			<div className='flex flex-col gap-3'>
				<div className='w-36 h-3w-36 rounded-full overflow-hidden'>
					<img src={avatar} alt='avatar' draggable='false' />
				</div>
				<div className='flex flex-col gap-1'>
					<div className='text-2xl font-bold' id='userName'>
						{name}
					</div>
					<div>{position}</div>
				</div>
			</div>
		</div>
	);
}

export default Head;
