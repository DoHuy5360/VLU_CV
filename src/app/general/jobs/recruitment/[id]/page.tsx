import { Buttons } from "@/components/button/buttons";
import RecruitmentTemplate from "@/components/view/editRecruitment/_component/recruitmentTemplate";
import { getRecruitmentEntity } from "@/entities/recruimentEntity";
import Recruitment from "@/models/recruitment";
import { connectToDatabase } from "@/services/mongoosedb";
import Apply from "./_component/apply";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Candidate_CV from "@/models/candidate_cv";
import Applicant from "@/models/applicant";
import View from "@/app/candidate/applicant/_component/view";

export default async function page({ params }: { params: { id: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	let myCVs;
	const appliedApplicant = await Applicant.findOne({
		candidateId: session?.user._id,
		recruitmentId: params.id,
	}).populate("candidateCvId");

	if (appliedApplicant === null) {
		myCVs = await Candidate_CV.find({
			userId: session?.user._id,
		})
			.sort({ createdAt: 1 })
			.select("_id name template data createdAt");
	}
	const recruitmentFound = await Recruitment.findOne({
		_id: params.id,
	});
	if (appliedApplicant !== null) {
		appliedApplicant.recruitmentId = recruitmentFound;
	}
	const initRecruitment = getRecruitmentEntity(recruitmentFound);

	return (
		<div className='flex flex-grow overflow-y-scroll'>
			<div className='p-6 flex-grow bg-slate-200 overflow-y-scroll'>
				<RecruitmentTemplate data={initRecruitment} />
			</div>
			<div className='sticky p-2 top-0 flex flex-col text-sm whitespace-nowrap border-l-[1px]'>
				{appliedApplicant ? (
					<div className='flex flex-col gap-2 items-center'>
						<div>Bạn đã ứng tuyển</div>
						<div className='flex items-center gap-2'>
							<div>Xem</div>
							<View data={JSON.stringify(appliedApplicant)} />
						</div>
					</div>
				) : (
					<Apply listOfCVs={JSON.stringify(myCVs)} recruitmentId={params.id} />
				)}
			</div>
		</div>
	);
}
