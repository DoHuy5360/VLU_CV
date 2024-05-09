import moment from "moment";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_CV from "@/models/candidate_cv";
import { getServerSession } from "next-auth";
import Link from "next/link";
import ListCV from "./_component/listCV";

export default async function CV() {
	await connectToDatabase();
	const session = await getServerSession(authOptions);

	const cvs = await Candidate_CV.find({
		userId: session?.user._id,
	})
		.sort({ updatedAt: -1 })
		.select("_id name createdAt");
	if (cvs.length === 0)
		return (
			<div className='grid place-items-center h-full'>
				<div>Bạn chưa có CV</div>
				<Link className='px-2 py-1 rounded-sm bg-green-200 text-xs' href='/template/cv'>
					Tạo ngay
				</Link>
			</div>
		);
	return <ListCV listCV={JSON.stringify(cvs)} />;
}
