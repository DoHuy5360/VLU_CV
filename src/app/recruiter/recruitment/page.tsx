import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment from "@/models/recruitment";
import moment from "moment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import DeleteRecruitment from "../_component/deleteRecruitment";

export default async function F() {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const arrRecruitment = await Recruitment.find({
		recruiterId: new ObjectId(session?.user._id as string),
	})
		.sort({ updatedAt: -1 })
		.select("_id title createAt");
	return (
		<div className='flex flex-col'>
			<div className='grid grid-cols-[30px_1fr_1fr_1fr] bg-orange-300 px-2 items-center whitespace-nowrap'>
				<div>#</div>
				<div>Tên</div>
				<div>Thời điểm tạo</div>
				<div>Thao tác</div>
			</div>
			{arrRecruitment.map((e, i) => {
				return (
					<div key={i} className='grid grid-cols-[30px_1fr_1fr_1fr] px-2 items-center'>
						<div>{i + 1}</div>
						<Link className='underline hover:text-blue-400' href={`/recruiter/recruitment/${e._id}`}>
							{e.title}
						</Link>
						<div>{moment(e.createdAt).format("DD-MM-YYYY / HH:mm")}</div>
						<div className='flex items-center gap-2'>
							<DeleteRecruitment id={e.id} name={e.title} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
