import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import { ObjectId } from "mongodb";
import Candidate from "@/models/candidate";
import PreHandler from "./_component/preHandler";

export default async function F({ params }: { params: { name: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const userFound = await Candidate.findOne({
		accountId: new ObjectId(session?.user._id as string),
	}).select("dataCV");
	if (userFound === null) return <div>Không tìm thấy dữ liệu người dùng.</div>;
	return (
		<div className='flex-grow overflow-hidden'>
			<PreHandler cvTemplateName={params.name} cvObjectData={userFound.dataCV} />
		</div>
	);
}
