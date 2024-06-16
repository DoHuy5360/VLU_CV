"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { CreateProfileDataForm } from "@/app/candidate/profile/_component/createProfile";
import { getDataPortfolio } from "@/entities/getDataPortfolio";
import { getUserDataCV } from "@/entities/userDataCV";
import { connectToDatabase } from "@/services/mongoosedb";
import Candidate_Profile, { CandidateProfileModelType } from "@/models/candidate_profiles";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export default async function createCandidateProfile(profile: CreateProfileDataForm) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const newCandidateProfile = new Candidate_Profile<CandidateProfileModelType>({
		accountId: session?.user._id,
		data:
			profile.type === "cv"
				? getUserDataCV({
						name: "",
						template: "Root",
				  })
				: getDataPortfolio(),
		name: profile.name,
		type: profile.type,
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
