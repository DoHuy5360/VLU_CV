import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";
import { ObjectId } from "mongodb";

export async function createAccount(data: AccountModelType): Promise<{ _id: ObjectId & Omit<AccountModelType, "_id"> }> {
	await connectToDatabase();
	const newAccount = new Account(data);
	return await newAccount.save();
}
