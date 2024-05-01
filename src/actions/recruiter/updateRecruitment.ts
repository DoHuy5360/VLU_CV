"use server";
import { RecruitmentDataForm } from "@/components/view/editRecruitment/editRecruitment";
import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment from "@/models/recruitment";
import { ObjectId } from "mongodb";

export const updateRecruitment = async (id: string, data: RecruitmentDataForm) => {
	await connectToDatabase();
	const { acknowledged } = await Recruitment.updateOne(
		{
			_id: new ObjectId(id),
		},
		{
			$set: {
				title: data.title,
				position: data.position,
				description: data.description,
				responsibility: data.responsibility,
				requirement: data.requirement,
				benefit: data.benefit,
				address: data.address,
				experience: data.experience,
				schedule: data.schedule,
				salary: data.salary,
				isHide: data.isHide,
				closeAt: data.closeAt,
			},
		}
	);
	return acknowledged;
};
