import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import { PiCertificateFill } from "react-icons/pi";

function Certificate() {
	const { state } = useContext(CvContext);

	return (
		<div className='relative'>
			<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
				<PiCertificateFill />
			</div>
			<div className='section flex flex-col gap-2 p-3 pl-8'>
				<div className='font-bold text-nowrap text-blue-500'>
					{state.attrs.certificate.title}
				</div>
				<div className='text-xs flex flex-col gap-2'>
					{state.attrs.certificate.certificates.map((c, i) => {
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

export default Certificate;
