import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment from "@/models/recruitment";
import { ObjectId } from "mongodb";
import PreHandler from "./_component/preHandler";
import moment from "moment";
import { getRecruitmentEntity } from "@/entities/recruimentEntity";

export default async ({ params }: { params: { id: string } }) => {
	await connectToDatabase();
	const recruitmentFound = await Recruitment.findOne({
		_id: new ObjectId(params.id),
	});
	const initRecruitment = getRecruitmentEntity(recruitmentFound);
	return <PreHandler id={params.id} recruitmentObjectData={initRecruitment} />;
};
