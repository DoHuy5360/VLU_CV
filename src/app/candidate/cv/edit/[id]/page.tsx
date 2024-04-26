import PreHandler from "../_component/preHandler";
import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { ObjectId } from "mongodb";

export default async ({ params }: { params: { id: string } }) => {
	await connectToDatabase();
	const cvFound = await User_CV.findOne({
		_id: new ObjectId(params.id),
	}).select("data");

	// return <div>{JSON.stringify(cvFound.data)}</div>;
	if (cvFound === null) return <div>Không tìm thấy CV</div>;

	return <PreHandler id={params.id} cvObjectData={cvFound.data} cvTemplateName={cvFound.data.template} />;
};
