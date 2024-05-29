import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { connectToDatabase } from "@/libs/mongoosedb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import ListCV from "./_component/listCV";
import Candidate_Portfolio from "@/models/candidate_portfolio";

export default async function CV() {
	await connectToDatabase();
	const session = await getServerSession(authOptions);

	const cvs = await Candidate_Portfolio.find({
		userId: session?.user._id,
	})
		.sort({ updatedAt: -1 })
		.select("_id name createdAt");
	if (cvs.length === 0)
		return (
			<div className='grid place-items-center h-full'>
				<div className="flex flex-col gap-2 items-center">
                    <div>Bạn chưa có Portfolio</div>
                    <Link className='px-2 w-fit py-1 rounded-sm bg-green-200 text-xs' href='/template/cv'>
                        Tạo ngay
                    </Link>
                </div>
			</div>
		);
	return <ListCV listCV={JSON.stringify(cvs)} />;
}