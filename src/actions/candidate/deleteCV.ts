"use server";
import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { ObjectId } from "mongodb";

export async function deleteCV(id: string) {
	await connectToDatabase();
	const { acknowledged } = await User_CV.deleteOne({
		_id: new ObjectId(id),
	});
	if (acknowledged) {
		console.log(id, "deleted");
		return true;
	} else {
		console.log("Delete", id, "failure");
		return false;
	}
}
