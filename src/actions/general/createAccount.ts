import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";

export async function createAccount(data: AccountModelType) {
	await connectToDatabase();
	const newAccount = new Account(data);
	return await newAccount.save();
}
