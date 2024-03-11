export type GoalProps = {
	title: String;
	content: String;
};

function Goal({ title, content }: GoalProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs'>{content}</div>
		</div>
	);
}

export default Goal;
