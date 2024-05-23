import { Certificate } from "@/types/userData";
import { FaCircle } from "react-icons/fa";

export default function F(data: Certificate) {
	return (
		data.certificates.length > 0 && (
			<div className='section flex flex-col justify-self-end items-end gap-2'>
				<div className="w-fit flex items-center gap-2 px-2 py-1 bg-[#00B4D8] text-white rounded-full">
					<FaCircle/>
					<div className='font-bold text-nowrap'>{data.title}</div>
				</div>
					<div className='text-xs flex flex-col gap-2 text-right'>
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
		)
	);
}
