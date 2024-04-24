"use server";
import { connectToDatabase } from "@/libs/mongoosedb";
import { createAccount } from "../general/createAccount";
import { CandidateDataForm } from "@/app/auth/_component/register/candidate";
import { AccountModelType } from "@/models/account";

export async function createGuestAccount(data: CandidateDataForm) {
	await connectToDatabase();
	const newAccountDoc: AccountModelType = await createAccount({
		email: data.email,
		password: data.password,
		role: "guest",
		image: "",
	});
	if (newAccountDoc === null) {
		return null;
	} else {
		return newAccountDoc;
	}
}
