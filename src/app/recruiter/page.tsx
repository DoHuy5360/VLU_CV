"use client";

import { createRecruitment } from "@/actions/recruiter/createRecruitment";
import EditRecruitment, { RecruitmentDataForm } from "@/components/view/editRecruitment/editRecruitment";
import { getCurrentDate } from "@/utils/dateHandler";

const initRecruitment: RecruitmentDataForm = {
	title: "",
	position: "",
	description: "",
	responsibility: "",
	requirement: "",
	benefit: "",
	address: "",
	experience: {
		year: 0,
		title: "Không yêu cầu kinh nghiệm.",
	},
	schedule: "",
	salary: "",
	isHide: false,
	isClose: false,
	startAt: getCurrentDate(),
	closeAt: "",
};

export default function F() {
	const handleSubmit = async (data: RecruitmentDataForm) => {
		const isSuccess = await createRecruitment(data);
		isSuccess ? alert("Tạo thành công") : alert("Tạo thất bại");
	};

	return <EditRecruitment recruitmentObjectData={initRecruitment} handleSubmit={handleSubmit} />;
}
