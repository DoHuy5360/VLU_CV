import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import RecruitmentTemplate from "@/components/view/editRecruitment/_component/recruitmentTemplate";
import { getRecruitmentEntity } from "@/entities/recruimentEntity";
import { connectToDatabase } from "@/services/mongoosedb";
import Recruitment from "@/models/recruitment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";

export default async function F({ params }: { params: { id: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const recruitmentFound = await Recruitment.findOne({
		_id: params.id,
		accountId: new ObjectId(session?.user._id as string),
	});
	const initRecruitment = getRecruitmentEntity(recruitmentFound);
	return (
		<div className='flex flex-grow overflow-y-scroll'>
			<RecruitmentTemplate data={initRecruitment} />
			<div className='sticky top-0 flex flex-col text-sm whitespace-nowrap border-l-[1px]'>
				<Link href={`/recruiter/recruitment/edit/${params.id}`} className='flex gap-1 items-center p-2 bg-yellow-300 hover:bg-yellow-400 cursor-pointer'>
					<BiEdit />
					<div>Chỉnh sửa</div>
				</Link>
			</div>
		</div>
	);
}
