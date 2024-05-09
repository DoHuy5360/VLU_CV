import Candidate_Profile from "@/models/candidate_profiles";
import PreHandler from "../_component/preHandler";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import { ObjectId } from "mongodb";
import NoData from "@/components/placeholder/noData";

export default async function F({ params }: { params: { id: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const candidateProfileFound = await Candidate_Profile.findOne({
		_id: new ObjectId(params.id),
		accountId: new ObjectId(session?.user._id as string),
	}).select("name data");
	if (candidateProfileFound === null) return <NoData />;
	return (
		<div className='flex-grow overflow-hidden'>
			<PreHandler objectData={JSON.stringify(candidateProfileFound)} />
		</div>
	);
}
