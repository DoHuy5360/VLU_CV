import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";
import { ObjectId } from "mongodb";

export async function createAccount(data: AccountModelType): Promise<{ _id: ObjectId & Omit<AccountModelType, "_id"> } | null> {
	await connectToDatabase();
	const accountFound = await Account.findOne({
		email: data.email
	})
	if(accountFound===null){
		const newAccount = new Account(data);
		return await newAccount.save();
	}else{
		return null
	}
}
