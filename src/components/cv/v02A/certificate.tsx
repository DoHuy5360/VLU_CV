import { Certificate } from "@/types/userData";
import { PiCertificateFill } from "react-icons/pi";

export default function Jsx(data: Certificate) {
	return (
		<div className='relative'>
			<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
				<PiCertificateFill />
			</div>
			<div className='section flex flex-col gap-2 p-3 pl-8'>
				<div className='font-bold text-nowrap text-blue-500'>
					{data.title}
				</div>
				<div className='text-xs flex flex-col gap-2'>
					{data.certificates.map((c, i) => {
						return (
							<div key={i}>
								<div>{c.time}</div>
								<div className='font-bold'>{c.name}</div>
								<div>{c.where}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
