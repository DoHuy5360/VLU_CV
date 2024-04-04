import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CvProvider from "@/contexts/cvProvider";
import { getServerSession } from "next-auth";
import Link from "next/link";

async function HomeLayout({ children }: { children: JSX.Element }) {
	const session = await getServerSession(authOptions);
	return (
		<div className='h-dvh flex flex-col'>
			<header className='border-b-[1px] border-slate-200 flex gap-2 items-center px-2 py-1'>
				<div className='w-10 h-10 rounded-full bg-slate-200'>
					<img
						src={session?.user?.image || ""}
						className=' object-cover'
						alt='Avatar'
					/>
				</div>
				<nav className='flex gap-2 text-xs'>
					<Link className='px-2 py-1 hover:bg-slate-300' href='/home'>
						Trang chủ
					</Link>
					<Link
						className='px-2 py-1 hover:bg-slate-300'
						href='/candidate/cv'
					>
						CV của tôi
					</Link>
					<Link
						className='px-2 py-1 hover:bg-slate-300'
						href='/candidate/profile'
					>
						Hồ sơ cá nhân
					</Link>
					<Link
						className='px-2 py-1 hover:bg-slate-300'
						href='/template/cv'
					>
						Mẫu CV
					</Link>
				</nav>
			</header>
			<main className='h-full'>
				<CvProvider>{children}</CvProvider>
			</main>
			{/* <footer>Đặt nội dung footer ở đây</footer> */}
		</div>
	);
}

export default HomeLayout;
