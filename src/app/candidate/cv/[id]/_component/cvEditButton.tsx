"use client";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";

export default function CvEditButton({ id }: { id: string }) {
	const router = useRouter();
	return (
		<button
			onClick={() => {
				router.push(`/candidate/cv/edit/${id}`);
			}}
			className='flex gap-1 justify-between items-center p-2 rounded-sm bg-yellow-400'
			type='button'
		>
			<BiEdit />
			<div>Chỉnh sửa</div>
		</button>
	);
}
