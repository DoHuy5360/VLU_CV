"use server";
import { connectToDatabase } from "@/services/mongoosedb";
import Recruitment from "@/models/recruitment";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export const deleteRecruitment = async (id: string) => {
	await connectToDatabase();
	const { acknowledged } = await Recruitment.deleteOne({
		_id: new ObjectId(id),
	});
	if (acknowledged) revalidateTag("/recruiter/recruitment");
};
