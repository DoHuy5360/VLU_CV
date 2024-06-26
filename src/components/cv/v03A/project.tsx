type Product = {
	name: String;
	time: String;
	where: String;
	member: String;
	position: String;
	tasks: String[];
	techs: String[];
};

type ProjectProps = {
	title: String;
	products: Product[];
};

function Project({ title, products }: ProjectProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='section flex flex-col gap-2'>
				<div className='flex gap-2 items-center'>
					<div className='font-bold text-nowrap'>{title}</div>
					<div className='h-[2px] w-full bg-black'></div>
				</div>
				<div className='flex flex-col text-xs'>
					{products.map((p, i) => {
						return (
							<div key={i} className='grid grid-cols-[100px_auto] gap-10'>
								<div className='flex flex-col gap-1'>
									<div className='text-nowrap font-bold'>{p.name}</div>
									<div className='text-nowrap'>{p.time}</div>
									<div className='text-nowrap'>{p.where}</div>
									<div className='text-nowrap'>{p.member}</div>
								</div>
								<div className='relative flex flex-col gap-2 pl-3 pb-3 border-l-[1px] border-dashed border-black'>
									<div className='w-2 h-2 rounded-full bg-black absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]'></div>
									<div className='font-bold'>{p.position}</div>
									<div>
										{p.tasks.map((t, j) => (
											<div key={j}>{t}</div>
										))}
										<br />
										{p.techs.map((t, j) => (
											<div key={j}>{t}</div>
										))}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Project;
