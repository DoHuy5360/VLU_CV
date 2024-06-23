import { Buttons } from "@/components/button/buttons";
import RecruitmentTemplate from "@/components/view/editRecruitment/_component/recruitmentTemplate";
import { getRecruitmentEntity } from "@/entities/recruimentEntity";
import Recruitment from "@/models/recruitment";
import { connectToDatabase } from "@/services/mongoosedb";
import Apply from "./_component/apply";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Candidate_CV from "@/models/candidate_cv";

export default async function page({ params }: { params: { id: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const cvs = await Candidate_CV.find({
		userId: session?.user._id,
	})
		.sort({ updatedAt: -1 })
		.select("_id name template data createdAt");

	const recruitmentFound = await Recruitment.findOne({
		_id: params.id,
	});

	const initRecruitment = getRecruitmentEntity(recruitmentFound);
	return (
		<div className='flex flex-grow overflow-y-scroll'>
			<RecruitmentTemplate data={initRecruitment} />
			<div className='sticky p-2 top-0 flex flex-col text-sm whitespace-nowrap border-l-[1px]'>
				<Apply listOfCVs={JSON.stringify(cvs)} recruitmentId={params.id} />
			</div>
		</div>
	);
}
