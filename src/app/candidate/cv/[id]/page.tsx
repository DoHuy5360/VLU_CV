import { Transfer } from "@/types/tranfer";
import Candidate_CV from "@/models/candidate_cv";
import { connectToDatabase } from "@/libs/mongoosedb";
import DownloadPDF from "./_downloadPDF/downloadPDF";
import CvEditButton from "./_component/cvEditButton";
import Recruitment from "@/models/recruitment";
import Recruiter from "@/models/recruiter";
import Company from "@/models/company";
import Image from "next/image";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await Candidate_CV.findOne({
		_id: params.id,
	});
	const recruitment = await Recruitment.find({}).populate("companyId");
	console.log(recruitment);
	return (
		<div className='flex justify-between'>
			<div className='flex flex-col p-2 border-r-[1px]'>
				{recruitment.map((e, i) => {
					return (
						<div key={i} className='flex border-b-[1px] hover:bg-slate-200 select-none cursor-pointer p-2 gap-2'>
							<Image src='/image/user.jpg' width={40} height={40} alt='user avatar' />
							<div className='flex flex-col'>
								<div className='text-xs whitespace-nowrap'>{e.companyId.name}</div>
								<div className='text-sm whitespace-nowrap'>{e.title}</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className='h-dvh pb-20 pt-5 overflow-y-scroll'>
				<div id='cvWrapper' className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-3/4 p-4 bg-slate-200'>
					{Transfer[cv.data.template](cv.data)}
				</div>
			</div>
			<div className='flex flex-col gap-2 p-2 text-sm select-none whitespace-nowrap w-fit'>
				<CvEditButton id={params.id} />
				<DownloadPDF fileName={cv.name} />
			</div>
		</div>
	);
}

export default ViewCV;
