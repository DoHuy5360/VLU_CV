"use client";
import { updateRecruitment } from "@/actions/recruiter/updateRecruitment";
import EditRecruitment, { RecruitmentDataForm } from "@/components/view/editRecruitment/editRecruitment";

export default function PreHandler({ id, recruitmentObjectData }: { id: string; recruitmentObjectData: RecruitmentDataForm }) {
	const handleSubmit = async (data: RecruitmentDataForm) => {
		const isSuccess = await updateRecruitment(id, data);
		isSuccess ? alert("Cập nhật thành công") : alert("Cập nhật thất bại");
	};

	return <EditRecruitment recruitmentObjectData={recruitmentObjectData} handleSubmit={handleSubmit} hiddenField={{ startAt: true }} />;
}
