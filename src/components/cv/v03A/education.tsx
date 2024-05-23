import { Education } from "@/types/userData";
import { FaCircle, FaGraduationCap } from "react-icons/fa";

export default function F(data: Education) {
	return (
		data.classes.length > 0 && (
			<div className='section flex flex-col justify-self-end items-end gap-2'>
				<div className="w-fit flex items-center gap-2 px-2 py-1 bg-[#00B4D8] text-white rounded-full">
					<FaCircle/>
					<div className='font-bold text-nowrap'>{data.title}</div>
				</div>
				<div className='text-xs flex flex-col gap-2'>
					{data.classes.map((e, i) => {
						return (
							<div key={e.id} className='flex flex-col text-right'>
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
		)
	);
}
