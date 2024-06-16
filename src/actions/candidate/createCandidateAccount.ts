"use server";
import { connectToDatabase } from "@/services/mongoosedb";
import { createAccount } from "../general/createAccount";
import Candidate, { CandidateModelType } from "@/models/candidate";
import { getUserDataCV } from "@/entities/userDataCV";
import { CandidateDataForm } from "@/app/auth/_component/register/candidate";
import Candidate_Profile from "@/models/candidate_profiles";

export async function createCandidateAccount(data: CandidateDataForm) {
	await connectToDatabase();
	const newAccountDoc = await createAccount({
		email: data.email,
		password: data.password,
		role: "candidate",
		image: "",
	});
	if (newAccountDoc === null) return null;
	const newCandidate = new Candidate<CandidateModelType>({
		accountId: newAccountDoc._id,
		name: data.name,
		phone: data.phone,
		gender: data.gender,
	});
	const newCandidateProfile = new Candidate_Profile({
		name: "Hồ sơ mặc định",
		accountId: newAccountDoc._id,
		data: getUserDataCV({
			name: "",
			template: "Root",
			head: {
				name: data.name,
				email: data.email,
			},
		}),
		default: true,
	});
	const candidateObject = await newCandidate.save();
	const candidateProfileObject = await newCandidateProfile.save();
	if (candidateObject === null || candidateProfileObject === null) {
		return null;
	} else {
		return JSON.stringify(newAccountDoc);
	}
}
