type ExperienceDetail = {
	name: String;
	time: String;
	position: String;
	tasks: String[];
};

type ExperienceProps = {
	title: String;
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
							<div>
								{w.tasks.map((t, j) => (
									<div key={j}>{t}</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Experience;
