import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CvEditProvider from "@/contexts/cvEditProvider";
import { getServerSession } from "next-auth";
import Link from "next/link";

async function HomeLayout({ children }: { children: JSX.Element }) {
	const session = await getServerSession(authOptions);
	return (
		<CvEditProvider>
			<div className='h-dvh flex flex-col overflow-hidden'>
				<header className='border-b-[1px] border-slate-200 flex gap-2 items-center px-2 py-1'>
					<div className='max-w-10 max-h-10 rounded-full bg-slate-200 border-slate-200 border-[1px] overflow-hidden'>
						<img src={session?.user.image || "/image/user.jpg"} className='object-cover' alt='Avatar' draggable={false} />
					</div>
					<nav className='flex w-full gap-2 text-xs items-center justify-between'>
						<div className='flex gap-2 items-center'>
							<Link className='whitespace-nowrap px-2 py-1 hover:bg-slate-300' href='/home'>
								Trang chủ
							</Link>
							<Link className='whitespace-nowrap px-2 py-1 hover:bg-slate-300' href='/candidate/cv'>
								CV của tôi
							</Link>
							<Link className='whitespace-nowrap px-2 py-1 hover:bg-slate-300' href='/candidate/profile?tab="Personal"'>
								Hồ sơ cá nhân
							</Link>
							<Link className='whitespace-nowrap px-2 py-1 hover:bg-slate-300' href='/template/cv'>
								Mẫu CV
							</Link>
						</div>
						<div className='flex items-center gap-2 text-sm'>
							<div>{session?.user.name}</div>
							<Link className='whitespace-nowrap text-white bg-purple-500 p-2 text-xs rounded-sm' href='/api/auth/signout'>
								Đăng Xuất
							</Link>
						</div>
					</nav>
				</header>
				<main className='h-full'>{children}</main>
				{/* <footer>Đặt nội dung footer ở đây</footer> */}
			</div>
		</CvEditProvider>
	);
}

export default HomeLayout;
