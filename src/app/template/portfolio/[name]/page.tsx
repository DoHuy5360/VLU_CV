import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/services/mongoosedb";
import { ObjectId } from "mongodb";
import Candidate_Profile from "@/models/candidate_profiles";
import NoData from "@/components/placeholder/noData";
import PreHandler from "./_component/preHandler";

export default async function F({ params }: { params: { name: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const candidateProfiles = await Candidate_Profile.find({
		accountId: new ObjectId(session?.user._id as string),
		type: "portfolio",
	}).select("name data");
	if (candidateProfiles === null) return <NoData />;
	return (
		<div className='flex-grow overflow-hidden relative'>
			<PreHandler cvTemplateName={params.name} profiles={JSON.stringify(candidateProfiles)} />
		</div>
	);
}
