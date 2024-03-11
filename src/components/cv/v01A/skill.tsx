type SkillDetail = {
	name: String;
	status: String;
};

type SkillProps = {
	title: String;
	skills: SkillDetail[];
};

function Skill({ title, skills }: SkillProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{skills.map((s) => {
					return (
						<div>
							<div className='font-bold'>{s.name}</div>
							<div>{s.status}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Skill;
