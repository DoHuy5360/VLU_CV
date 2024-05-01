import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment from "@/models/recruitment";
import moment from "moment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";

export default async () => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const arrRecruitment = await Recruitment.find({
		recruiterId: new ObjectId(session?.user._id as string),
	}).select("_id title createAt");
	return (
		<div className='flex flex-col'>
			<div className='grid grid-cols-[30px_300px_200px_50px] bg-orange-300 px-2 items-center whitespace-nowrap'>
				<div>#</div>
				<div>Tên</div>
				<div>Thời điểm tạo</div>
				<div>Thao tác</div>
			</div>
			{arrRecruitment.map((e, i) => {
				return (
					<div key={i} className='grid grid-cols-[30px_300px_200px_50px] px-2 items-center'>
						<div>{i + 1}</div>
						<Link className='underline' href={`/recruiter/recruitment/${e._id}`}>
							{e.title}
						</Link>
						<div>{moment(e.createdAt).format("DD-MM-YYYY / HH:mm")}</div>
						<div>
							<div className='text-red-500'>
								<BiTrash />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
