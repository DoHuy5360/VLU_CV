"use client";
import { deleteRecruitment } from "@/actions/recruiter/deleteRecruitment";
import { Buttons } from "@/components/button/buttons";

export default function DeleteRecruitment({ id, name }: { id: string; name: string }) {
	return (
		<form
			action={async () => {
				const isDelete = confirm(`Có chắc chắn là muốn xóa ${name} ?`);
				if (isDelete) await deleteRecruitment(id);
			}}
		>
			<Buttons.Delete.Click.Icon />
		</form>
	);
}
