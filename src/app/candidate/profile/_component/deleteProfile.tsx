"use client";
import { deleteProfile } from "@/actions/candidate/deleteProfile";
import { BiTrash } from "react-icons/bi";

export default function DeleteProfile({ name, _id }: { _id: string; name: string }) {
	return (
		<form
			action={async () => {
				const isDelete = confirm(`Xóa ${name}`);
				isDelete && (await deleteProfile(_id));
			}}
		>
			<button className='p-2 text-red-500 cursor-pointer hover:bg-slate-300' type='submit'>
				<BiTrash />
			</button>
		</form>
	);
}
