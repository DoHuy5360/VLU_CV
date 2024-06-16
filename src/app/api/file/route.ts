import { connectToDatabase } from "@/services/mongoosedb";
import CV from "@/models/cv";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import FirebaseStorage, { FirebaseStorageFolders } from "@/services/firebase";
import { Unique } from "@/utils/uniqued";

export async function GET(req: Request, res: Response) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const userFound = await CV.find({
		type: null,
	});
	if (userFound === null) return Response.json({ error: true }, { status: 200 });
	return Response.json(userFound, { status: 200 });
}

export async function POST(req: Request, res: Response) {
	const data = await req.formData();
	const file = data.get('file') as File;
	if(file){
		const fileName = Unique.getString() + "." + file.name.split('.').at(-1);
		const bytes = await file.arrayBuffer()
		const buffer = Buffer.from(bytes)
		const url = await FirebaseStorage.upload_to(fileName, buffer, FirebaseStorageFolders.AVATARS)
		return Response.json({ success: true , url});
	}
	// await connectToDatabase();
	// try {
	// 	const { name, thumbnail } = await req.json();
	// 	const newCV = new CV({
	// 		name,
	// 		thumbnail,
	// 	});
	// 	await newCV.save();
	// } catch (error) {
	// 	console.log(error);
	// 	Response.json({ error: "An error occurred" });
	// }

	return Response.json({ success: false });
}
