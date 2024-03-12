type ExperienceDetail = {
	name: string;
	time: string;
	position: string;
	tasks: string;
};

type ExperienceProps = {
	title: string;
	works: ExperienceDetail[];
};

function Experience({ title, works }: ExperienceProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='font-bold text-nowrap text-blue-500'>
				{title}
			</div>
			<div className='flex flex-col gap-4 text-xs'>
				{works.map((w, i) => {
					return (
						<div key={i} className='flex flex-col gap-1'>
							<div className='text-nowrap'>{w.time}</div>
							<div className='font-bold'>{w.position}</div>
							<div className='font-bold'>{w.name}</div>
							<div>{w.tasks}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Experience;
