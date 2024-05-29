import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import Template from "@/models/template";

export async function GET(req: Request, res: Response) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const userFound = await Template.find({});
	if (userFound === null) return Response.json({ error: true }, { status: 200 });
	return Response.json(userFound, { status: 200 });
}

export async function POST(req: Request, res: Response) {
	await connectToDatabase();
	try {
		const { name, thumbnail } = await req.json();
		const newCV = new CV({
			name,
			thumbnail,
		});
		await newCV.save();
	} catch (error) {
		console.log(error);
		Response.json({ error: "An error occurred" });
	}

	Response.json({ success: true });
}
