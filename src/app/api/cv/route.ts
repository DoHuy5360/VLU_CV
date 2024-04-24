import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { ObjectId, OptionalId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
import Candidate from "@/models/candidate";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const userFound = await Candidate.findOne({
		_id: new ObjectId(session?.user._id as string),
	}).select("dataCV");
	return NextResponse.json(userFound.dataCV, { status: 200 });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	await connectToDatabase();
	try {
		const { name, thumbnail } = req.body;
		const newCV = new CV({
			name,
			thumbnail,
		});
		await newCV.save();
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "An error occurred" });
	}

	res.status(200).json({ success: true });
}
