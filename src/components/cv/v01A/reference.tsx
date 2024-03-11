type ReferencePerson = {
	name: String;
	where: String;
	phone: String;
};

type ReferenceProps = {
	title: "Reference";
	references: ReferencePerson[];
};
function Reference({ title, references }: ReferenceProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{references.map((r, i) => {
					return (
						<div key={i}>
							<div>{r.name}</div>
							<div>{r.where}</div>
							<div>{r.phone}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Reference;
