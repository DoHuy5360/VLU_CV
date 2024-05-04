import { Education } from "@/types/userData";
import { FaGraduationCap } from "react-icons/fa";

export default function F(data: Education) {
	return (
		data.classes.length > 0 && (
			<div className='relative'>
				<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
					<FaGraduationCap />
				</div>
				<div className='p-3 pl-8 section flex flex-col gap-2'>
					<div className='font-bold text-nowrap text-blue-500'>{data.title}</div>
					<div className='text-xs flex flex-col gap-2'>
						{data.classes.map((e, i) => {
							return (
								<div key={e.id} className='flex flex-col'>
									<div className='flex gap-1 font-bold'>
										<div>{e.school}</div>
										<div>|</div>
										<div>{e.time}</div>
									</div>
									<div className='font-bold'>{e.major}</div>
									<div>{e.status}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		)
	);
}
