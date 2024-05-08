import { useFormStatus } from "react-dom";

export default function GreenSubmit() {
	const { pending } = useFormStatus();
	return (
		<button disabled={pending} className='bg-green-200 hover:bg-green-300 active:bg-orange-300 px-4 py-1 rounded-full text-sm w-fit' type='submit'>
			{pending ? "Đang xử lý" : "Lưu"}
		</button>
	);
}
