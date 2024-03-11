type EducationProps = {
	title: String;
	time: String;
	major: String;
	school: String;
	status: String;
};

function Education({ title, time, major, school, status }: EducationProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				<div>{time}</div>
				<div className='font-bold'>{major}</div>
				<div>{school}</div>
				<div>{status}</div>
			</div>
		</div>
	);
}

export default Education;
