"use server";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_CV from "@/models/candidate_cv";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export async function deleteCV(id: string) {
	await connectToDatabase();
	const { acknowledged } = await Candidate_CV.deleteOne({
		_id: id,
	});
	if (acknowledged) {
		revalidateTag("/candidate/cv");
	}
}
