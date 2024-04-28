"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_CV from "@/models/Candidate_CV";
import { UserData } from "@/types/userData";
import { getServerSession } from "next-auth";

export async function createReplica(cvName: string, userData: UserData) {
	await connectToDatabase();
	const session = await getServerSession(authOptions);
	userData.template = cvName;
	const data = {
		userId: session?.user._id,
		template: userData.template,
		name: userData.name,
		data: userData,
	};
	try {
		const newUserCV = new Candidate_CV(data);
		const userCvObject = await newUserCV.save();
		return userCvObject === null ? false : true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
