"use server";
import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export async function deleteCV(id: string) {
	await connectToDatabase();
	const { acknowledged } = await User_CV.deleteOne({
		_id: new ObjectId(id),
	});
	if (acknowledged) {
		revalidateTag("/candidate/cv");
	}
}
