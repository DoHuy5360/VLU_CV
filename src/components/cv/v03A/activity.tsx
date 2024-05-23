import { Activity } from "@/types/userData";
import { FaCircle } from "react-icons/fa";

export default function F(data: Activity) {
	return (
		data.activities.length > 0 && (
			<div className='section flex flex-col justify-self-end items-end gap-2'>
				<div className="w-fit flex items-center gap-2 px-2 py-1 bg-[#00B4D8] text-white rounded-full">
					<FaCircle/>
					<div className='font-bold text-nowrap'>{data.title}</div>
				</div>
				<div className='text-xs flex flex-col gap-2'>
					{data.activities.map((a, i) => {
						return (
							<div key={i} className='flex flex-col gap-1 text-right'>
								<div>{a.time}</div>
								<div>{a.position}</div>
								<div className='font-bold'>{a.name}</div>
								<div className='whitespace-pre-line'>{a.tasks}</div>
							</div>
						);
					})}
				</div>
			</div>
		)
	);
}
