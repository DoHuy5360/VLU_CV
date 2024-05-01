"use client";
import { deleteRecruitment } from "@/actions/recruiter/deleteRecruitment";
import { BiTrash } from "react-icons/bi";

export default function DeleteRecruitment({ id, name }: { id: string; name: string }) {
	return (
		<form
			action={async () => {
				const isDelete = confirm(`Có chắc chắn là muốn xóa ${name} ?`);
				if (isDelete) await deleteRecruitment(id);
			}}
		>
			<button className='text-red-500' type='submit'>
				<BiTrash />
			</button>
		</form>
	);
}
