import { Transfer } from "@/types/tranfer";
import Candidate_CV from "@/models/candidate_cv";
import { connectToDatabase } from "@/libs/mongoosedb";
import DownloadPDF from "./_downloadPDF/downloadPDF";
import CvEditButton from "./_component/cvEditButton";
import Recruitment from "@/models/recruitment";
import Image from "next/image";
import { CosineSimilarity, TextVector } from "@/utils/wordVector";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await Candidate_CV.findOne({
		_id: params.id,
	});
	const recruitment = await Recruitment.find({}).populate("companyId");
	const isShowRecommend = cv.data.attrs.skill.skills.length !== 0;
	let candidateSkills: TextVector | undefined;
	if (isShowRecommend) {
		candidateSkills = new TextVector(
			cv.data.attrs.skill.skills.reduce((init: { status: string }, e: { status: string }) => {
				return init.status + ";" + e.status;
			})
		);
	}
	console.log(recruitment[0].requirement);
	return (
		<div className='flex-grow overflow-y-hidden h-[inherit]'>
			<div className='h-[inherit] overflow-y-scroll grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-2'>
				<div className='flex h-[inherit]'>
					<div className='flex flex-col gap-2 p-2 text-sm select-none whitespace-nowrap w-fit'>
						<CvEditButton id={params.id} />
						<DownloadPDF fileName={cv.name} />
					</div>
					<div className='h-[inherit] flex-grow pb-20 pt-5 overflow-y-scroll'>
						<div id='cvWrapper' className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-3/4 p-4 bg-slate-200'>
							{Transfer[cv.data.template](cv.data)}
						</div>
					</div>
				</div>
				{candidateSkills !== undefined && (
					<div className='h-[inherit] flex flex-grow flex-col border-r-[1px] border-l-[1px]'>
						<div className='text-sm border-b-[1px] p-2'>Đề xuất công việc phù hợp</div>
						{recruitment.map((e, i) => {
							const matchPercent = new CosineSimilarity(candidateSkills, new TextVector(recruitment[i].requirement)).getSimilarity() * 100;
							return (
								<div key={i} className='grid grid-cols-[40px_1fr_50px] border-b-[1px] hover:bg-slate-200 select-none cursor-pointer py-2 gap-2'>
									<Image src='/image/user.jpg' width={40} height={40} className='p-2' alt='user avatar' />
									<div className='flex flex-col'>
										<div className='text-xs whitespace-nowrap'>{e.companyId.name}</div>
										<div className='text-sm whitespace-nowrap'>{e.title}</div>
									</div>
									<div>{matchPercent}%</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default ViewCV;
