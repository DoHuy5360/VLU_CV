"use server";

import Applicant from "@/models/applicant";
import { connectToDatabase } from "@/services/mongoosedb";
import { revalidateTag } from "next/cache";

export const updateApplicant = async (applicantId: string) => {
	await connectToDatabase();
	const { acknowledged } = await Applicant.updateOne(
		{
			_id: applicantId,
		},
		{
			$set: {
				isDeleted: true,
			},
		}
	);
	if (acknowledged) {
		revalidateTag("/candidate/applicant");
	}
	return acknowledged;
};
