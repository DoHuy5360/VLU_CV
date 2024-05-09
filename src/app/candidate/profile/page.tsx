import { connectToDatabase } from "@/libs/mongoosedb";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import NoData from "@/components/placeholder/noData";
import CandidateProfile from "@/models/candidate_profiles";
import ListProfiles from "./_component/listProfile";

export default async function Profile() {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const candidateProfiles = await CandidateProfile.find({
		accountId: new ObjectId(session?.user._id as string),
	})
		.sort({ updatedAt: 1 })
		.select("name default createdAt");

	if (candidateProfiles === null) return <NoData />;

	return <ListProfiles profiles={JSON.stringify(candidateProfiles)} />;
}
