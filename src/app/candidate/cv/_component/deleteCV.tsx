"use client";
import { deleteCV } from "@/actions/candidate/deleteCV";
import { BiTrash } from "react-icons/bi";

export default function DeleteCV({ id, name }: { id: string; name: string }) {
	return (
		<form
			action={async (e) => {
				const isDelete = confirm(`Xóa ${name}`);
				isDelete && (await deleteCV(id));
			}}
		>
			<button className='p-2 text-red-500 cursor-pointer hover:bg-slate-300' type='submit'>
				<BiTrash />
			</button>
		</form>
	);
}
