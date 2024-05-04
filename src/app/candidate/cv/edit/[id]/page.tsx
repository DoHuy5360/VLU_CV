import PreHandler from "../_component/preHandler";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_CV from "@/models/candidate_cv";
import { ObjectId } from "mongodb";

export default async function F({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cvFound = await Candidate_CV.findOne({
		_id: new ObjectId(params.id),
	}).select("data");

	if (cvFound === null) return <div>Không tìm thấy CV</div>;

	return <PreHandler id={params.id} cvObjectData={cvFound.data} cvTemplateName={cvFound.data.template} />;
}
