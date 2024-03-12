import { FaGraduationCap } from "react-icons/fa";

type EducationProps = {
	title: String;
	time: String;
	major: String;
	school: String;
	status: String;
};

function Education({
	title,
	time,
	major,
	school,
	status,
}: EducationProps) {
	return (
		<div className='relative'>
			<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
				<FaGraduationCap />
			</div>
			<div className='p-3 pl-8 section flex flex-col gap-2'>
				<div className='font-bold text-nowrap text-blue-500'>
					{title}
				</div>
				<div className='text-xs flex flex-col gap-2'>
					<div className='flex gap-1 font-bold'>
						<div>{school}</div>
						<div>|</div>
						<div>{time}</div>
					</div>
					<div className='font-bold'>{major}</div>
					<div>{status}</div>
				</div>
			</div>
		</div>
	);
}

export default Education;
