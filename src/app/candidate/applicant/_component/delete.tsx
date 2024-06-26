"use client";

import { updateApplicant } from "@/actions/candidate/updateApplicant";
import { Buttons } from "@/components/button/buttons";

export default function Delete({ applicantId }: { applicantId: string }) {
	return (
		<div
			onClick={async () => {
				const isConfirm = confirm("Đông ý xóa?");
				if (isConfirm) {
					const isSuccess = await updateApplicant(applicantId);
					isSuccess ? alert("Xóa thành công") : alert("Xóa thất bại");
				}
			}}
		>
			<Buttons.Delete.Click.Icon />
		</div>
	);
}
