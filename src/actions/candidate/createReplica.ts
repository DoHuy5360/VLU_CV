"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { UserData } from "@/types/userData";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export async function createReplica(userData: UserData) {
	await connectToDatabase();
	const session = await getServerSession(authOptions);
	const data = {
		cvId: new ObjectId(),
		userId: session?.user._id,
		name: userData.name,
		data: userData,
	};
	const newUserCV = new User_CV(data);
	newUserCV.save();
}
