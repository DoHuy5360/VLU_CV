import { RecruitmentDataForm } from "@/components/view/editRecruitment/editRecruitment";
import moment from "moment";

export const getRecruitmentEntity = ({
	title,
	position,
	description,
	responsibility,
	requirement,
	benefit,
	address,
	experience,
	schedule,
	salary,
	isHide,
	isClose,
	startAt,
	closeAt,
}: RecruitmentDataForm) => {
	return {
		title,
		position,
		description,
		responsibility,
		requirement,
		benefit,
		address,
		experience: {
			year: experience.year,
			title: experience.title,
		},
		schedule,
		salary,
		isHide,
		isClose,
		startAt: moment(startAt).format("DD-MM-YYYY"),
		closeAt: moment(closeAt).format("DD-MM-YYYY"),
	};
};
