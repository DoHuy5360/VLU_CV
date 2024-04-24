"use server";
import { connectToDatabase } from "@/libs/mongoosedb";
import { createAccount } from "../general/createAccount";
import Candidate, { CandidateModelType } from "@/models/candidate";
import { getUserDataCV } from "@/entities/userDataCV";
import { CandidateDataForm } from "@/app/auth/_component/register/candidate";

export async function createCandidateAccount(data: CandidateDataForm) {
	await connectToDatabase();
	const newAccountDoc = await createAccount({
		email: data.email,
		password: data.password,
		role: "candidate",
		image: "",
	});
	const newCandidate = new Candidate({
		accountId: newAccountDoc._id,
		name: data.name,
		phone: data.phone,
		gender: data.gender,
		dataCV: getUserDataCV({
			name: "This is file's name",
			template: "Root",
			head: {
				name: data.name,
				email: data.email,
			},
		}),
	});
	const newCandidateDoc: CandidateModelType = await newCandidate.save();
	if (newCandidateDoc === null) {
		return null;
	} else {
		return newCandidateDoc;
	}
}
