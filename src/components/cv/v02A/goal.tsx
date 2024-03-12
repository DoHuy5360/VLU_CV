import { FaQuoteLeft } from "react-icons/fa";

export type GoalProps = {
	title: String;
	content: String;
};

function Goal({ title, content }: GoalProps) {
	return (
		<div className='section flex flex-col gap-2'>
			<div className='text-2xl text-slate-300'>
				<FaQuoteLeft />
			</div>
			<div className='text-xs text-justify'>{content}</div>
		</div>
	);
}

export default Goal;
