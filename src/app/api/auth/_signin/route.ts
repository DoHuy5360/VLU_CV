import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { ObjectId, OptionalId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import User from "@/models/user";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	// const session = await getServerSession(authOptions);
	// await connectToDatabase();
	// const userFound = await User.findOne({
	// 	_id: new ObjectId(session?.user._id as string),
	// }).select("dataCV");
	return NextResponse.json({ hello: 1 }, { status: 200 });
}
