"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { connectToDatabase } from "@/services/mongoosedb";
import Candidate_Portfolio from "@/models/candidate_portfolio";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export default async function createPortfolio(cvName: string, userData: PortfolioFormData) {
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
		const newUserCV = new Candidate_Portfolio(data);
		const userCvObject = await newUserCV.save();
		if (userCvObject === null) {
			return false;
		} else {
			revalidateTag("/candidate/portfolio");
			return true;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
}
