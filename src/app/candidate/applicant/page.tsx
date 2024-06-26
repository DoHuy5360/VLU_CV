import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Buttons } from "@/components/button/buttons";
import NoData from "@/components/placeholder/noData";
import Applicant from "@/models/applicant";
import { connectToDatabase } from "@/services/mongoosedb";
import { getServerSession } from "next-auth";
import Data from "./_component/data";

export default async function page() {
	await connectToDatabase();
	const session = await getServerSession(authOptions);
	let applicants = await Applicant.find({
		candidateId: session?.user._id,
		isDeleted: false,
	})
		.sort({ createdAt: -1 })
		.populate("recruitmentId")
		.populate("candidateCvId");

	if (applicants.length === 0) return <NoData buttonName='Đi ứng tuyển ngay' redirectTo='/general/jobs/recruitment' />;

	return (
		<div className='flex flex-col overflow-y-hidden'>
			<div className='flex justify-between items-center p-2 border-b-[1px]'>
				<div className='font-bold text-lg'>Danh sách ứng tuyển của tôi</div>
				<Buttons.Solid.Cyan.Link text='Đến trang tuyển dụng' href='/general/jobs/recruitment' />
			</div>
			<div className='grid grid-cols-[50px_auto_150px_150px] items-center text-sm border-b-[1px]'>
				<div className='text-center'>#</div>
				<div className='p-2 border-l-[1px]'>Tiêu đề</div>
				<div className='text-center'>Thao tác</div>
				<div className=''>Ngày ứng tuyển</div>
			</div>
			<div className='overflow-y-scroll bg-slate-200'>
				<Data listOfApplicants={JSON.stringify(applicants)} />
			</div>
		</div>
	);
}
