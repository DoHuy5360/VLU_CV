import { Skill } from "@/types/userData";
import { FaCircle, FaCog } from "react-icons/fa";

export default function F(data: Skill) {
	return (
		data.skills.length > 0 && (
				<div className='section flex flex-col justify-self-start items-start gap-2'>
				<div className="w-fit flex items-center gap-2 px-2 py-1 bg-[#00B4D8] text-white rounded-full">
					<FaCircle/>
					<div className='font-bold text-nowrap'>{data.title}</div>
				</div>
					<div className='text-xs flex flex-col gap-2'>
						{data.skills.map((s, i) => {
							return (
								<div key={i}>
									<div className='font-bold'>{s.name}</div>
									<div>{s.status}</div>
								</div>
							);
						})}
					</div>
				</div>
		)
	);
}
