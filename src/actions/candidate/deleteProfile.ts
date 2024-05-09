"use server";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_Profile from "@/models/candidate_profiles";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export async function deleteProfile(_id: string) {
	await connectToDatabase();
	const { acknowledged } = await Candidate_Profile.deleteOne({
		_id: new ObjectId(_id),
	});
	if (acknowledged) {
		revalidateTag("/candidate/profile");
	}
}
