import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import HomeLayout from "@/components/layouts/app/home";
import { connectToDatabase } from "@/libs/mongoosedb";
import User_CV from "@/models/user_cv";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useEffect, useState } from "react";

async function CV() {
	await connectToDatabase();
	const session = await getServerSession(authOptions);
	const cvs = await User_CV.find({
		userId: session?.user._id,
	}).select("_id name");
	return (
		<HomeLayout>
			<div className='flex flex-col'>
				{cvs.map((cv, index) => (
					<div
						key={cv._id}
						className='grid grid-cols-[20px_auto_100px] p-1 hover:bg-slate-200'
					>
						<div>{index + 1}</div>
						<Link
							className='underline hover:text-blue-500'
							href={`/candidate/cv/${cv._id}`}
						>
							{cv.name}
						</Link>
						<div>{cv.created}</div>
					</div>
				))}
			</div>
		</HomeLayout>
	);
}

export default CV;
