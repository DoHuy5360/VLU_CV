type OtherProps = {
	title: String;
	content: String;
};

function Other({ title, content }: OtherProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>{content}</div>
		</div>
	);
}

export default Other;
