import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment from "@/models/recruitment";
import moment from "moment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async () => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const arrRecruitment = await Recruitment.find({
		recruiterId: new ObjectId(session?.user._id as string),
	}).select("_id title createAt");
	return (
		<div className='flex flex-col'>
			<div className='grid grid-cols-[1fr_1fr]'>
				<div>Tên</div>
				<div>Thời điểm tạo</div>
			</div>
			{arrRecruitment.map((e, i) => {
				return (
					<div key={i} className='grid grid-cols-[1fr_1fr]'>
						<Link href={`/recruiter/recruitment/${e._id}`}>{e.title}</Link>
						<div>{moment(e.createdAt).format("DD-MM-YYYY / HH:mm")}</div>
					</div>
				);
			})}
		</div>
	);
};
