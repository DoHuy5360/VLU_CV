"use server";
import { RecruiterDataForm } from "@/app/auth/_component/register/recruiter";
import { connectToDatabase } from "@/libs/mongoosedb";
import { createAccount } from "../general/createAccount";
import Recruiter from "@/models/recruiter";

export async function createRecruiterAccount(data: RecruiterDataForm) {
	await connectToDatabase();
	const newAccountDoc = await createAccount({
		email: data.email,
		password: data.password,
		role: "recruiter",
		image: "",
	});
	const newRecruiter = new Recruiter({
		accountId: newAccountDoc._id,
		name: data.name,
		phone: data.phone,
		gender: data.gender,
		position: data.position,
	});
	const newRecruiterDoc = await newRecruiter.save();
	if (newRecruiter === null) {
		return true;
	}
}
