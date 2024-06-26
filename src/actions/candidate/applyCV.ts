"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Applicant from "@/models/applicant";
import { connectToDatabase } from "@/services/mongoosedb";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export default async function applyCV(candidateCvId: string, recruitmentId: string, message: string) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const newApplicant = new Applicant({
		candidateId: session?.user._id,
		recruitmentId,
		candidateCvId,
		message,
		isDeleted: false,
	});
	const obj = newApplicant.save();
	revalidateTag("/candidate/applicant");
	revalidateTag("/general/jobs/recruitment");
	return obj === null ? false : true;
}
