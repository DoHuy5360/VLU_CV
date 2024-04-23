import { RecruiterDataForm } from "@/app/recruiter/_component/register";
import { connectToDatabase } from "@/libs/mongoosedb";
import Account from "@/models/account";

type AccountType = {
	email: string;
	password: string;
	role: string;
	image: string;
};
export async function createAccount(data: AccountType) {
	await connectToDatabase();
	const newAccount = new Account(data);
	const { _id } = await newAccount.save();
	return { _id };
}
