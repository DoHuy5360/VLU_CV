import moment from "moment";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import HomeLayout from "@/components/layouts/app/home";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_CV from "@/models/candidate_cv";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { deleteCV } from "@/actions/candidate/deleteCV";
import DeleteCV from "./_component/deleteCV";

export default async function CV() {
	await connectToDatabase();
	const session = await getServerSession(authOptions);

	const cvs = await Candidate_CV.find({
		userId: session?.user._id,
	})
		.sort({ updatedAt: -1 })
		.select("_id name createdAt");
	return (
		<div className='text-sm flex flex-col h-full'>
			<div className='grid grid-cols-[50px_1fr_150px_100px] bg-orange-400 text-white'>
				<div className='p-2 text-center'>#</div>
				<div className='p-2'>Tên</div>
				<div className='p-2'>Thời điểm tạo</div>
				<div className='p-2'>Thao tác</div>
			</div>
			{cvs.length > 0 ? (
				cvs.map((cv, index) => (
					<div key={cv._id} id={cv._id.toString()} className='grid grid-cols-[50px_1fr_150px_100px] items-center hover:bg-slate-100'>
						<>
							<div className='p-2 text-center'>{index + 1}</div>
							<Link className='p-2 underline hover:text-blue-500 whitespace-nowrap' href={`/candidate/cv/${cv._id}`}>
								{cv.name}
							</Link>
							<div className='p-2 whitespace-nowrap'>{moment(cv.createdAt).format("DD-MM-YYYY / HH:mm")}</div>
							<div className='flex gap-2 align-bottom'>
								<div className='p-2 cursor-pointer hover:bg-slate-300'>
									<RxEyeClosed />
									{/* <RxEyeOpen /> */}
								</div>
								<DeleteCV id={cv._id.toString()} name={cv.name} />
							</div>
						</>
					</div>
				))
			) : (
				<div className='grid place-items-center h-full'>
					<div>Bạn chưa có CV</div>
					<Link className='px-2 py-1 rounded-sm bg-green-200 text-xs' href='/template/cv'>
						Tạo ngay
					</Link>
				</div>
			)}
		</div>
	);
}
