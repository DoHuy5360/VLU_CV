import { RecruiterDataForm } from "@/app/auth/_component/register/recruiter";
import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";

export async function createAccount(data: AccountModelType) {
	await connectToDatabase();
	const newAccount = new Account(data);
	const { _id } = await newAccount.save();
	return { _id };
}
