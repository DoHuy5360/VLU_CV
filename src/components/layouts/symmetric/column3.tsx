import { Transfer } from "@/app/cv/[id]/page";

type Column3Props = {
	left: any;
	middle: any;
	right: any;
};

function Column3({ left, middle, right }: Column3Props) {
	return (
		<div className='sections grid grid-cols-3 gap-4'>
			{left}
			{middle}
			{right}
		</div>
	);
}

export default Column3;
