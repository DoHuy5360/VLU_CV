import { FaCog } from "react-icons/fa";

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
		<div className='relative'>
			<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
				<FaCog />
			</div>
			<div className='section flex flex-col gap-2 p-3 pl-8'>
				<div className='font-bold text-nowrap text-blue-500'>
					{title}
				</div>
				<div className='text-xs flex flex-col gap-2'>
					{skills.map((s, i) => {
						return (
							<div key={i}>
								<div className='font-bold'>{s.name}</div>
								<div>{s.status}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Skill;