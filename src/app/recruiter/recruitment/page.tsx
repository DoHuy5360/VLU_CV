import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/services/mongoosedb";
import Recruitment from "@/models/recruitment";
import moment from "moment";
import { getServerSession } from "next-auth";
import Link from "next/link";
import DeleteRecruitment from "../_component/deleteRecruitment";

export default async function F() {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const arrRecruitment = await Recruitment.find({
		accountId: session?.user._id,
	})
		.sort({ updatedAt: -1 })
		.select("_id title createAt");
	return (
		<div className='flex flex-col'>
			<div className='grid grid-cols-[30px_auto_150px_150px] bg-slate-200 px-2 items-center whitespace-nowrap'>
				<div className='text-center'>#</div>
				<div>Tên đơn tuyển dụng</div>
				<div className='text-center'>Thời điểm tạo</div>
				<div className='text-center'>Thao tác</div>
			</div>
			<div className='flex flex-col gap-2 p-2'>
				{arrRecruitment.map((e, i) => {
					return (
						<div key={i} className='grid grid-cols-[30px_auto_150px_150px] px-2 items-center'>
							<div>{i + 1}</div>
							<Link className='underline hover:text-blue-400' href={`/recruiter/recruitment/${e._id}`}>
								{e.title}
							</Link>
							<div className='text-center'>{moment(e.createdAt).format("DD-MM-YYYY")}</div>
							<div className='flex items-center gap-2 justify-center'>
								<DeleteRecruitment id={e.id} name={e.title} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
