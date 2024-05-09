import { BiPlus } from "react-icons/bi";

export default function BlueCreate() {
	return (
		<button className='flex gap-1 items-center text-sm bg-blue-200 hover:bg-blue-300 active:bg-blue-200 p-2 rounded-sm' type='submit'>
			<div>Tạo mới</div>
			<BiPlus />
		</button>
	);
}
