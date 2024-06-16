"use server";
import { connectToDatabase } from "@/services/mongoosedb";
import Candidate_Portfolio from "@/models/candidate_portfolio";
import { revalidateTag } from "next/cache";

export async function deletePortfolio(id: string) {
	await connectToDatabase();
	const { acknowledged } = await Candidate_Portfolio.deleteOne({
		_id: id,
	});
	if (acknowledged) {
		revalidateTag("/candidate/portfolio");
	}
}
