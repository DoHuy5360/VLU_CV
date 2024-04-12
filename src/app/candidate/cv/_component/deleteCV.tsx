"use client";
import { deleteCV } from "@/actions/candidate/deleteCV";
import { BiTrash } from "react-icons/bi";

function DeleteCV({ id }: { id: string }) {
	return (
		<form
			action={async (e) => {
				const result = await deleteCV(id);
				if (result) document.getElementById(id)?.remove();
			}}
		>
			<button
				className='p-2 text-red-500 cursor-pointer hover:bg-slate-300'
				type='submit'
			>
				<BiTrash />
			</button>
		</form>
	);
}

export default DeleteCV;
