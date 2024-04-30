import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Recruitment from "@/models/recruitment";
import moment from "moment";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

export default async ({ params }: { params: { id: string } }) => {
	const session = await getServerSession(authOptions);
	await connectToDatabase();
	const recruitmentFound = await Recruitment.findOne({
		_id: new ObjectId(params.id),
		recruiterId: new ObjectId(session?.user._id as string),
	});
	return (
		<div className='flex-grow h-full overflow-y-scroll'>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>title:</div>
				<div>{recruitmentFound.title}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>position:</div>
				<div>{recruitmentFound.position}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>description:</div>
				<div>{recruitmentFound.description}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>responsibility:</div>
				<div>{recruitmentFound.responsibility}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>requirement:</div>
				<div>{recruitmentFound.requirement}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>benefit:</div>
				<div>{recruitmentFound.benefit}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>address:</div>
				<div>{recruitmentFound.address}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>experience:</div>
				<div>{recruitmentFound.experience.title}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>salary:</div>
				<div>{recruitmentFound.salary}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>startAt:</div>
				<div>{moment(recruitmentFound.startAt).format("DD-MM-YYYY / HH:mm")}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>closeAt:</div>
				<div>{moment(recruitmentFound.closeAt).format("DD-MM-YYYY / HH:mm")}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>isHide:</div>
				<div>{recruitmentFound.isHide ? "Đang ẩn" : "Đang hiển thị"}</div>
			</div>
			<div className='flex flex-col gap-1 border-b-[1px] p-2'>
				<div>isClose:</div>
				<div>{recruitmentFound.isClose ? "Đã đóng" : "Chưa đóng"}</div>
			</div>
		</div>
	);
};
