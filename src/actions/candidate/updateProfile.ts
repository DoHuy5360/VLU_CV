"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import User from "@/models/user";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function updateProfile(data: string) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const { acknowledged } = await User.updateOne(
		{
			_id: new ObjectId(session?.user._id as string),
		},
		{
			$set: {
				dataCV: JSON.parse(data),
			},
		}
	);
	return acknowledged;
}
