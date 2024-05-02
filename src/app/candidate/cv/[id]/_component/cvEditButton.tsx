"use client";
import useLoading from "@/hooks/useLoading";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

export default function CvEditButton({ id }: { id: string }) {
	const { isLoading, setLoading, LoadingElement } = useLoading();
	return (
		<Link
			href={`/candidate/cv/edit/${id}`}
			onClick={() => {
				setLoading(true);
			}}
			className='flex gap-1 justify-between items-center p-2 rounded-sm bg-yellow-400'
		>
			<BiEdit />
			{isLoading ? <LoadingElement /> : <div>Chỉnh sửa</div>}
		</Link>
	);
}
