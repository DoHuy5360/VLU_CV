"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Applicant from "@/models/applicant";
import { connectToDatabase } from "@/services/mongoosedb";
import { getServerSession } from "next-auth";

export default async function applyCV(candidateCvId: string, recruitmentId: string, message: string) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const newApplicant = new Applicant({
		recruitmentId,
		candidateCvId,
		message,
	});
	const obj = newApplicant.save();
	return obj === null ? false : true;
}
