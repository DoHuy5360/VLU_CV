import HomeLayout from "@/components/layouts/app/home";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import RecruiterLayout from "@/components/layouts/recruiterLayout";
import CandidateLayout from "@/components/layouts/candidateLayout";
import AdminLayout from "@/components/layouts/adminLayout";

export default async function Layout({ children }: { children: JSX.Element }) {
	const session = await getServerSession(authOptions);
	if (!session)
		return (
			<div className='flex justify-between w-full items-center'>
				<Link className='text-xs underline' href='/recruiter'>
					Tuyển dụng
				</Link>
				<Link className='text-white bg-orange-500 p-2 text-xs rounded-sm' href='/auth'>
					Đăng Nhập
				</Link>
			</div>
		);
	return (
		<>
			{session.user.role === "candidate" && <CandidateLayout>{children}</CandidateLayout>}
			{session.user.role === "recruiter" && <RecruiterLayout>{children}</RecruiterLayout>}
			{session.user.role === "admin" && <AdminLayout>{children}</AdminLayout>}
		</>
	);
}
