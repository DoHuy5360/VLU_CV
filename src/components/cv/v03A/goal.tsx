import { Goal } from "@/types/userData";
import { FaCircle, FaQuoteLeft } from "react-icons/fa";

export default function F(data: Goal) {
	return (
		data.content.length > 0 && (
			<div className='section flex flex-col justify-self-start items-start gap-2'>
				<div className="w-fit flex items-center gap-2 px-2 py-1 bg-[#00B4D8] text-white rounded-full">
					<FaCircle/>
					<div className='font-bold text-nowrap'>{data.title}</div>
				</div>
				<div className='text-xs text-justify'>{data.content}</div>
			</div>
		)
	);
}
