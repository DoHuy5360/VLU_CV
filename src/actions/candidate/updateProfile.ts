"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate from "@/models/candidate";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function updateProfile(data: string) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const { acknowledged } = await Candidate.updateOne(
		{
			accountId: new ObjectId(session?.user._id as string),
		},
		{
			$set: {
				dataCV: JSON.parse(data),
			},
		}
	);
	return acknowledged;
}
