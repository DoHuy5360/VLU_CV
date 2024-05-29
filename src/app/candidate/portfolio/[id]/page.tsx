import { Transfer } from "@/types/tranfer";
import { connectToDatabase } from "@/libs/mongoosedb";
import { Buttons } from "@/components/button/buttons";
import Candidate_Portfolio from "@/models/candidate_portfolio";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await Candidate_Portfolio.findOne({
		_id: params.id,
	});
	return (
		<div className='flex-grow overflow-y-hidden h-[inherit]'>
				<div className='flex h-[inherit]'>
					<div className='flex flex-col gap-2 p-2 text-sm select-none whitespace-nowrap w-fit'>
						<Buttons.Solid.Yellow.Link text='Chỉnh sửa' href={`/candidate/portfolio/edit/${cv._id}`} />
					</div>
					<div className='h-[inherit] flex-grow overflow-y-scroll'>
						<div id='cvWrapper' className='m-auto border-[1px]'>
							{Transfer[cv.data.template](cv.data)}
						</div>
					</div>
				</div>
		</div>
	);
}

export default ViewCV;
