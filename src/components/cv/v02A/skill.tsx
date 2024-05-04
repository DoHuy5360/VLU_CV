import { Skill } from "@/types/userData";
import { FaCog } from "react-icons/fa";

export default function F(data: Skill) {
	return (
		data.skills.length > 0 && (
			<div className='relative'>
				<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
					<FaCog />
				</div>
				<div className='section flex flex-col gap-2 p-3 pl-8'>
					<div className='font-bold text-nowrap text-blue-500'>{data.title}</div>
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
			</div>
		)
	);
}
