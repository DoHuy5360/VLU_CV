import HomeLayout from "@/components/layouts/app/home";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Layout({ children }: { children: JSX.Element }) {
	const session = await getServerSession(authOptions);
	return (
		<div className='flex flex-col h-dvh'>
			<div className='border-b-[1px] border-slate-200 p-2'>
				{session ? (
					<div className='flex justify-between items-center w-full'>
						{session?.user.role === "admin" && (
							<Link href='/admin' className='text-xs underline'>
								Trang quản trị
							</Link>
						)}
						{session?.user.role === "recruiter" && (
							<Link href='/recruiter' className='text-xs underline'>
								Trang tuyển dụng
							</Link>
						)}
						{session?.user.role === "candidate" && (
							<Link href='/candidate' className='text-xs underline'>
								Trang ứng viên
							</Link>
						)}
						<div className='flex gap-2 items-center'>
							<div className='text-xs'>{session.user?.name}</div>
							<Link className='text-white bg-purple-500 p-2 text-xs rounded-sm' href='/api/auth/signout'>
								Đăng Xuất
							</Link>
						</div>
					</div>
				) : (
					<div className='flex justify-between w-full items-center'>
						<Link className='text-xs underline' href='/recruiter'>
							Tuyển dụng
						</Link>
						<Link className='text-white bg-orange-500 p-2 text-xs rounded-sm' href='/auth'>
							Đăng Nhập
						</Link>
					</div>
				)}
			</div>
			{children}
		</div>
	);
}
