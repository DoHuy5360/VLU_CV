import { Experience } from "@/types/userData";
import { FaCircle } from "react-icons/fa";

export default function F(data: Experience) {
	return (
		data.works.length > 0 && (
			<div className='section flex flex-col gap-2 justify-self-end items-end w-fit'>
				<div className='flex items-center gap-2 font-bold text-nowrap px-2 py-1 w-fit text-white bg-[#00B4D8] rounded-full'>
					<FaCircle/>
					<div>{data.title}</div>
				</div>
				<div className='flex flex-col gap-4 text-xs w-fit'>
					{data.works.map((w, i) => {
						return (
							<div key={i} className='flex flex-col gap-1 text-right'>
								<div className='text-nowrap'>{w.time}</div>
								<div className='font-bold'>{w.position}</div>
								<div className='font-bold'>{w.name}</div>
								<div className='whitespace-pre-line'>{w.tasks}</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
}
