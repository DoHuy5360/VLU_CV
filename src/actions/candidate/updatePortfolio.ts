"use server";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { connectToDatabase } from "@/services/mongoosedb";
import Candidate_Portfolio from "@/models/candidate_portfolio";
import { revalidateTag } from "next/cache";

export const updatePortfolio = async ({ id, data }: { id: string; data: PortfolioFormData }) => {
	await connectToDatabase();
	const { acknowledged } = await Candidate_Portfolio.updateOne(
		{
			_id: id,
		},
		{
			$set: {
				name: data.name,
				template: data.template,
				data: data,
			},
		}
	);
	if (acknowledged) {
		revalidateTag(`/candidate/portfolio/${id}`);
	}
	return acknowledged;
};
