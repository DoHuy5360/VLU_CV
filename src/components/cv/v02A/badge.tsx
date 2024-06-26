type Achievement = {
	time: String;
	name: String;
	where: String;
};
type BadgeProps = {
	title: String;
	achievements: Achievement[];
};

function Badge({ title, achievements }: BadgeProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{achievements.map((a, i) => {
					return (
						<div key={i}>
							<div>{a.time}</div>
							<div className='font-bold'>{a.name}</div>
							<div>{a.where}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Badge;
