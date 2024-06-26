import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import RecruitmentTemplate from "@/components/view/editRecruitment/_component/recruitmentTemplate";
import { getRecruitmentEntity } from "@/entities/recruimentEntity";
import { connectToDatabase } from "@/services/mongoosedb";
import Recruitment from "@/models/recruitment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { Buttons } from "@/components/button/buttons";
import Applicant from "@/models/applicant";

export default async function F({ params }: { params: { id: string } }) {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const applicants = await Applicant.find({
		recruitmentId: params.id,
	});
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
				<Link href={`/recruiter/applicant/${params.id}`} className='flex gap-2 items-center p-2 cursor-pointer bg-green-300'>
					<div>Ứng tuyển</div>
					<div className='bg-red-500 text-white rounded-full grid items-center'>{applicants.length}</div>
				</Link>
			</div>
		</div>
	);
}
