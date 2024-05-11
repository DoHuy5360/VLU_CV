"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_Profile from "@/models/candidate_profiles";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async function updateProfile(_id: string, data: string) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const { acknowledged } = await Candidate_Profile.updateOne(
		{
			_id,
			accountId: session?.user._id,
		},
		{
			$set: {
				data: JSON.parse(data),
			},
		}
	);
	return acknowledged;
}
