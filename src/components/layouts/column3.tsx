import { Transfer } from "@/app/cv/[id]/page";

type Column3Props = {
	left: any;
	middle: any;
	right: any;
};

function Column3({ left, middle, right }: Column3Props) {
	return (
		<div className='sections grid grid-cols-3 gap-4'>
			{Transfer[left.name](left.attrs)}
			{Transfer[middle.name](middle.attrs)}
			{Transfer[right.name](right.attrs)}
		</div>
	);
}

export default Column3;
