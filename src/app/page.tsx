import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function App() {
	const session = await getServerSession(authOptions);
	// console.log("session:", session);
	return (
		<div className='flex flex-col h-dvh'>
			<div className='flex bg-red-500 p-2'>
				<img
					className='h-6'
					src='https://ejob.vlu.edu.vn/images/Group.png'
					alt='Van Lang Logo'
				/>
			</div>
			<div className='bg-white p-2 flex justify-end items-center gap-2'>
				{session ? (
					<>
						<Link href='/home' className='text-xs underline'>
							Trang Chủ
						</Link>
						<div className='text-xs'>{session.user?.name}</div>
						<Link
							className='text-white bg-purple-500 p-2 text-xs rounded-sm'
							href='/api/auth/signout'
						>
							Đăng Xuất
						</Link>
					</>
				) : (
					<Link
						className='text-white bg-blue-500 p-2 text-xs rounded-sm'
						href='/api/auth/signin'
					>
						Đăng Nhập
					</Link>
				)}
			</div>
			<div className='bg-orange-300 h-full w-full'></div>
		</div>
	);
}
