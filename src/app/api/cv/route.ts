import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { ObjectId, OptionalId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(
	req: NextApiRequest,
	res: NextApiResponse
) {
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
