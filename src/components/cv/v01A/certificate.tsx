import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

function Certificate() {
	const { state } = useContext(CvContext);
	return (
		<div className='section flex flex-col gap-2'>
			<div className='flex gap-2 items-center'>
				<div className='font-bold text-nowrap'>
					{state.attrs.certificate.title}
				</div>
				<div className='h-[2px] w-full bg-black'></div>
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
	);
}

export default Certificate;
