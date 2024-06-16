"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/services/mongoosedb";
import Candidate_Profile from "@/models/candidate_profiles";
import { getServerSession } from "next-auth";
import { UserData } from "@/types/userData";

export default async function updateProfile(_id: string, data: string) {
	const cvData: UserData = JSON.parse(data);
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const { acknowledged } = await Candidate_Profile.updateOne(
		{
			_id,
			accountId: session?.user._id,
		},
		{
			$set: {
				data: cvData,
			},
		}
	);
	return acknowledged;
}
