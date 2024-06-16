"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { RecruitmentDataForm } from "@/components/view/editRecruitment/editRecruitment";
import { connectToDatabase } from "@/services/mongoosedb";
import Recruiter from "@/models/recruiter";
import Recruitment, { RecruitmentSchemaType } from "@/models/recruitment";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const createRecruitment = async (data: RecruitmentDataForm) => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const recruiterFound = await Recruiter.findOne({
		accountId: session?.user._id,
	});
	const dataObject: RecruitmentSchemaType = { ...data, accountId: recruiterFound.accountId, companyId: recruiterFound.companyId, isClose: false };
	const newRecruitment = new Recruitment(dataObject);
	const objectRecruitment = await newRecruitment.save();
	if (objectRecruitment === null) {
		return false;
	} else {
		revalidateTag("/recruiter/recruitment");
		return true;
	}
};
