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
			_id: new ObjectId(_id),
			accountId: new ObjectId(session?.user._id as string),
		},
		{
			$set: {
				data: JSON.parse(data),
			},
		}
	);
	return acknowledged;
}
