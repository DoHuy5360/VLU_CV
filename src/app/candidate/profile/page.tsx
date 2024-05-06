import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate from "@/models/candidate";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import PreHandler from "./_component/preHandler";
import NoData from "@/components/placeholder/noData";

export default async function F() {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const userFound = await Candidate.findOne({
		accountId: new ObjectId(session?.user._id as string),
	}).select("dataCV");

	if (userFound === null) return <NoData />;

	return (
		<div className='flex-grow overflow-hidden'>
			<PreHandler data={userFound.dataCV} />
		</div>
	);
}
