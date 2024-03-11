type Certification = {
	time: String;
	name: String;
	where: String;
};
type CertificateProps = {
	title: "Certificate";
	certificates: Certification[];
};
function Certificate({ title, certificates }: CertificateProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>{title}</div>
				<div className='h-[2px] w-full bg-black'></div>
			</div>
			<div className='text-xs flex flex-col gap-2'>
				{certificates.map((c) => {
					return (
						<div>
							<div>{c.time}</div>
							<div className='font-bold'>{c.name}</div>
							<div>{c.where}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Certificate;
