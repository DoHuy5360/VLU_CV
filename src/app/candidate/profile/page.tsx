import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate from "@/models/candidate";
import { ObjectId } from "mongodb";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import ClientRenderer from "./_component/clientRenderer";
import { UserData } from "@/types/userData";

export default async () => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const userFound = await Candidate.findOne({
		accountId: new ObjectId(session?.user._id as string),
	}).select("dataCV");

	if (userFound === null) return <div>Loading...</div>;

	return <ClientRenderer data={userFound.dataCV} />;
};
