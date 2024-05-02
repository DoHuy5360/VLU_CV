import { Transfer } from "@/types/tranfer";
import Candidate_CV from "@/models/candidate_cv";
import { connectToDatabase } from "@/libs/mongoosedb";
import DownloadPDF from "./_downloadPDF/downloadPDF";
import CvEditButton from "./_component/cvEditButton";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await Candidate_CV.findOne({
		_id: params.id,
	});
	return (
		<div className='flex'>
			<div className='w-full h-dvh pb-20 pt-5 overflow-y-scroll'>
				<div id='cvWrapper' className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/4 p-4 bg-slate-200'>
					{Transfer[cv.data.template](cv.data)}
				</div>
			</div>
			<div className='flex flex-col gap-2 p-2 text-sm select-none whitespace-nowrap'>
				<CvEditButton id={params.id} />
				<DownloadPDF fileName={cv.name} />
			</div>
		</div>
	);
}

export default ViewCV;
