import { Transfer } from "@/types/tranfer";
import Candidate_CV from "@/models/candidate_cv";
import { connectToDatabase } from "@/services/mongoosedb";
import DownloadPDF from "./_downloadPDF/downloadPDF";
import Recruitment from "@/models/recruitment";
import Image from "next/image";
import { CosineSimilarity, TextVector } from "@/utils/wordVector";
import { Buttons } from "@/components/button/buttons";
import Link from "next/link";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await Candidate_CV.findOne({
		_id: params.id,
	});
	const recruitment = await Recruitment.find({}).populate("companyId").select("companyId requirement title");
	console.log(recruitment);
	const isShowRecommend = cv.data.attrs.skill.skills.length !== 0;
	let candidateSkills: TextVector | undefined;

	if (isShowRecommend) {
		const mergeSkillString = cv.data.attrs.skill.skills.reduce(
			(init: { status: string }, e: { status: string }) => {
				return init.status + " " + e.status;
			},
			{ status: "" }
		);
		candidateSkills = new TextVector(mergeSkillString);
	}
	return (
		<div className='flex-grow overflow-y-hidden h-[inherit]'>
			<div className='h-[inherit] overflow-y-scroll grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-2'>
				<div className='flex h-[inherit]'>
					<div className='flex flex-col gap-2 p-2 text-sm select-none whitespace-nowrap w-fit'>
						<Buttons.Solid.Yellow.Link text='Chỉnh sửa' href={`/candidate/cv/edit/${cv._id}`} />
						{cv.data.attrs.head.avatar === "" && <DownloadPDF fileName={cv.name} />}
					</div>
					<div className='h-[inherit] flex-grow pb-20 pt-5 overflow-y-scroll bg-slate-200'>
						<div id='cvWrapper' className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-3/4 shadow-lg'>
							{Transfer[cv.data.template](cv.data)}
						</div>
					</div>
				</div>
				{candidateSkills !== undefined && (
					<div className='h-[inherit] flex flex-grow flex-col border-r-[1px] border-l-[1px]'>
						<div className='text-sm border-b-[1px] p-2'>Đề xuất công việc phù hợp</div>
						{recruitment
							.map((e, i) => {
								return {
									dataRecruitment: e,
									matchPercent: new CosineSimilarity(candidateSkills, new TextVector(e.requirement)).getSimilarity() * 100,
								};
							})
							.sort((a, b) => {
								return b.matchPercent - a.matchPercent;
							})
							.map((e, i) => {
								if (e.matchPercent === 0) {
									return <></>;
								}
								return (
									<Link href={`/general/jobs/recruitment/${e.dataRecruitment._id}`}>
										<div key={i} className='grid grid-cols-[40px_auto_200px] border-b-[1px] hover:bg-slate-200 select-none cursor-pointer py-2 gap-2 items-center p-2'>
											<Image src='/image/user.jpg' width={40} height={40} className='p-2' alt='user avatar' />
											<div className='flex flex-col gap-1'>
												<div className='text-sm whitespace-nowrap font-bold'>{e.dataRecruitment.companyId.name}</div>
												<div className='text-xs whitespace-break-spaces p-1 rounded-lg w-fit bg-slate-200'>{e.dataRecruitment.title}</div>
											</div>
											<div className='flex items-center justify-end gap-2 border-l-[1px] text-sm'>
												<div>Khớp</div>
												<div className={`p-1 rounded-lg ${e.matchPercent < 30 ? "bg-orange-400" : e.matchPercent < 60 ? "bg-yellow-300" : "bg-green-300"}`}>{e.matchPercent}%</div>
												<div>với kỹ năng</div>
											</div>
										</div>
									</Link>
								);
							})}
					</div>
				)}
			</div>
		</div>
	);
}

export default ViewCV;
