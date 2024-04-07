import { Goal } from "@/types/userData";
import { FaQuoteLeft } from "react-icons/fa";

export default function Jsx(data: Goal) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='text-2xl text-slate-300'>
				<FaQuoteLeft />
			</div>
			<div className='text-xs text-justify'>{data.content}</div>
		</div>
	);
}
