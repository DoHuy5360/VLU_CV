import { connectToDatabase } from "@/services/mongoosedb";
import Recruitment from "@/models/recruitment";
import { ObjectId } from "mongodb";
import PreHandler from "./_component/preHandler";
import { getRecruitmentEntity } from "@/entities/recruimentEntity";

export default async function F({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const recruitmentFound = await Recruitment.findOne({
		_id: new ObjectId(params.id),
	});
	const initRecruitment = getRecruitmentEntity(recruitmentFound);
	return <PreHandler id={params.id} recruitmentObjectData={initRecruitment} />;
}
