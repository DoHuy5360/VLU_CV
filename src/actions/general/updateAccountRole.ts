"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Account from "@/models/account";
import { getServerSession } from "next-auth";

export const updateAccountRole = async (role: "recruiter" | "candidate") => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const { acknowledged } = await Account.updateOne(
		{
			email: session?.user.email,
		},
		{
			$set: {
				role,
			},
		}
	);
	return acknowledged;
};
