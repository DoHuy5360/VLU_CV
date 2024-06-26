import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Buttons } from "@/components/button/buttons";
import NoData from "@/components/placeholder/noData";
import Applicant from "@/models/applicant";
import { connectToDatabase } from "@/services/mongoosedb";
import moment from "moment";
import { getServerSession } from "next-auth";
import View from "./_component/view";
import Delete from "./_component/delete";

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
				<Buttons.Solid.Cyan.Link text='Trang tuyển dụng' href='/general/jobs/recruitment' />
			</div>
			<div className='grid grid-cols-[50px_auto_150px_150px] items-center text-sm border-b-[1px]'>
				<div className='text-center'>#</div>
				<div className='p-2 border-l-[1px]'>Tiêu đề</div>
				<div className='text-center'>Thao tác</div>
				<div className=''>Ngày ứng tuyển</div>
			</div>
			<div className='overflow-y-scroll py-2 bg-slate-200'>
				<div className='flex flex-col gap-2'>
					{applicants.map((e, i) => {
						return (
							<div key={i} className='grid grid-cols-[50px_auto_150px_150px] items-center hover:bg-slate-100 bg-white border-[1px] rounded-sm'>
								<div className='text-center'>{i + 1}</div>
								<div className='p-2 border-l-[1px]'>
									<div className='text-sm'>{e.recruitmentId.title}</div>
									<div className='text-xs flex gap-2'>Trạng thái: {e.recruitmentId.isClose ? <div className='text-red-400'>Đã đóng</div> : <div className='text-green-400'>Còn mở</div>}</div>
								</div>
								<div className='flex justify-center gap-2'>
									<View data={JSON.stringify(e)} />
									<Delete applicantId={e._id} />
								</div>
								<div className='text-sm text-center'>{moment(e.createdAt).format("DD-MM-YYYY")}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
