"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { TransferType } from "@/types/tranfer";
import { UserData } from "@/types/userData";
import { ObjectId } from "mongodb";
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
	const newUserCV = new User_CV(data);
	await newUserCV.save();

	return newUserCV === null ? false : true;
}
