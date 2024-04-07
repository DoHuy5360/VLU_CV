import { Education } from "@/types/userData";
import { FaGraduationCap } from "react-icons/fa";

export default function Jsx(data: Education) {
	return (
		<div className='relative'>
			<div className='absolute translate-x-[-50%] bg-blue-400 p-2 rounded-full text-white'>
				<FaGraduationCap />
			</div>
			<div className='p-3 pl-8 section flex flex-col gap-2'>
				<div className='font-bold text-nowrap text-blue-500'>
					{data.title}
				</div>
				<div className='text-xs flex flex-col gap-2'>
					<div className='flex gap-1 font-bold'>
						<div>{data.school}</div>
						<div>|</div>
						<div>{data.time}</div>
					</div>
					<div className='font-bold'>{data.major}</div>
					<div>{data.status}</div>
				</div>
			</div>
		</div>
	);
}
