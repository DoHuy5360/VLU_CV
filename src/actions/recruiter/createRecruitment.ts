"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { RecruitmentDataForm } from "@/components/view/editRecruitment/editRecruitment";
import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment, { RecruimentSchemaType } from "@/models/recruitment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const createRecruitment = async (data: RecruitmentDataForm) => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const dataObject: RecruimentSchemaType = { ...data, recruiterId: new ObjectId(session?.user._id as string), isClose: false };
	const newRecruitment = new Recruitment(dataObject);
	const objectRecruitment = await newRecruitment.save();
	if (objectRecruitment === null) {
		return false;
	} else {
		revalidateTag("/recruiter/recruitment");
		return true;
	}
};
