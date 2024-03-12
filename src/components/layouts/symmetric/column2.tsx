import { Transfer } from "@/app/cv/[id]/page";

type Column2Props = {
	left: any;
	right: any;
};

function Column2({ left, right }: Column2Props) {
	return (
		<div className='sections grid grid-cols-2 gap-10'>
			{left}
			{right}
		</div>
	);
}

export default Column2;
