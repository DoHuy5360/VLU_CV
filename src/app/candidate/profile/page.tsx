import { connectToDatabase } from "@/libs/mongoosedb";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import NoData from "@/components/placeholder/noData";
import CandidateProfile from "@/models/candidate_profiles";
import ListProfiles from "./_component/listProfile";

export default async function Profile() {
	await connectToDatabase();
	const session = await getServerSession(authOptions);
	const candidateProfiles = await CandidateProfile.find({
		accountId: session?.user._id,
	})
		.sort({ updatedAt: 1 })
		.select("name default createdAt");

	if (candidateProfiles === null) return <NoData />;

	return <ListProfiles profiles={JSON.stringify(candidateProfiles)} />;
}
