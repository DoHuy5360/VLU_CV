import { Transfer } from "@/types/tranfer";
import User_CV from "@/models/user_cv";
import { connectToDatabase } from "@/libs/mongoosedb";
import DownloadPDF from "./_downloadPDF/page";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await User_CV.findOne({
		_id: params.id,
	});
	return (
		<div className='flex'>
			<div className='h-dvh pb-20 pt-5 overflow-y-scroll'>
				<div
					id='cvWrapper'
					className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/4 p-4 bg-slate-200'
				>
					{Transfer[cv.data.template](cv.data)}
				</div>
			</div>
			<DownloadPDF />
		</div>
	);
}

export default ViewCV;
