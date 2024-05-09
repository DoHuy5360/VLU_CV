"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getUserDataCV } from "@/entities/userDataCV";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_Profile, { CandidateProfileModelType } from "@/models/candidate_profiles";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export default async function createCandidateProfile(profileName: string) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const newCandidateProfile = new Candidate_Profile<CandidateProfileModelType>({
		accountId: new ObjectId(session?.user._id as string),
		data: getUserDataCV({
			name: "",
			template: "Root",
		}),
		name: profileName,
		default: false,
	});

	const objectCandidateProfile = await newCandidateProfile.save();

	if (objectCandidateProfile === null) {
		return false;
	} else {
		revalidateTag("/candidate/profile");
		return true;
	}
}
