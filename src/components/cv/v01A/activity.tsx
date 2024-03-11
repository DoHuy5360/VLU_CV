type Act = {
	time: String;
	name: String;
	tasks: String[];
};

type ActivityProps = {
	title: String;
	activities: Act[];
};
function Activity({ title, activities }: ActivityProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{activities.map((a) => {
					return (
						<div>
							<div>{a.time}</div>
							<div className='font-bold'>{a.name}</div>

							{a.tasks.map((t) => (
								<div>{t}</div>
							))}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Activity;
