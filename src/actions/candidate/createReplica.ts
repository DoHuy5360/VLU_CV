"use server";

import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { UserData } from "@/types/userData";
import { ObjectId } from "mongodb";

export async function createReplica(userData: UserData) {
	await connectToDatabase();
	const data = {
		cvId: new ObjectId(),
		userId: new ObjectId(),
		name: "Huy",
		data: userData,
	};
	const newUserCV = new User_CV(data);
	newUserCV.save();
}
