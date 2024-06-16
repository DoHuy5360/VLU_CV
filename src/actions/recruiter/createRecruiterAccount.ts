"use server";
import { RecruiterDataForm } from "@/app/auth/_component/register/recruiter";
import { connectToDatabase } from "@/services/mongoosedb";
import { createAccount } from "../general/createAccount";
import Recruiter from "@/models/recruiter";
import Company from "@/models/company";

export async function createRecruiterAccount(data: RecruiterDataForm) {
	await connectToDatabase();
	const newCompany = new Company({
		name: data.name,
		province: data.province,
		district: data.district,
	});
	const newCompanyDoc = await newCompany.save();

	const newAccountDoc = await createAccount({
		email: data.email,
		password: data.password,
		role: "recruiter",
		image: "",
	});
	if (newAccountDoc === null) return false;

	const newRecruiter = new Recruiter({
		accountId: newAccountDoc._id,
		companyId: newCompanyDoc._id,
		name: data.name,
		phone: data.phone,
		gender: data.gender,
		position: data.position,
	});
	const newRecruiterDoc = await newRecruiter.save();
	if (newRecruiterDoc === null) {
		return false;
	} else {
		return true;
	}
}
