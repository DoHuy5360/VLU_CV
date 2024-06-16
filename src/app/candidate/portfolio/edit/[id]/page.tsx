import PreHandler from "../_component/preHandler";
import { connectToDatabase } from "@/services/mongoosedb";
import Candidate_Portfolio from "@/models/candidate_portfolio";
import { ObjectId } from "mongodb";

export default async function F({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cvFound = await Candidate_Portfolio.findOne({
		_id: params.id,
	}).select("data");

	if (cvFound === null) return <div>Không tìm thấy CV</div>;

	return (
		<div className='flex-grow overflow-hidden relative'>
			<PreHandler id={params.id} cvObjectData={cvFound.data} />
		</div>
	);
}
