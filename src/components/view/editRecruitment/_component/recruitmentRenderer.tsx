"use client";

import { useContext } from "react";
import { RecruitmentFormContext } from "../editRecruitment";
import RecruitmentTemplate from "./recruitmentTemplate";

export default function RecruitmentRenderer() {
	const recruitment = useContext(RecruitmentFormContext);
	if (recruitment === null) return <div>Loading...</div>;
	return <RecruitmentTemplate data={recruitment} />;
}
