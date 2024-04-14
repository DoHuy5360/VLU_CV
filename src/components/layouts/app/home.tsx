import CvProvider from "@/contexts/cvProvider";
import Link from "next/link";

function HomeLayout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col overflow-hidden'>
			<header className='border-b-[1px] border-slate-200 flex gap-2 items-center px-2 py-1'>
				<div className='w-10 h-10 rounded-full bg-slate-200'>
					<img src={""} className=' object-cover' alt='Avatar' />
				</div>
				<nav className='flex w-full gap-2 text-xs items-center'>
					<Link
						className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'
						href='/home'
					>
						Trang chủ
					</Link>
					<Link
						className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'
						href='/candidate/cv'
					>
						CV của tôi
					</Link>
					<Link
						className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'
						href='/candidate/profile?tab="Information"'
					>
						Hồ sơ cá nhân
					</Link>
					<Link
						className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'
						href='/template/cv'
					>
						Mẫu CV
					</Link>
					<div className='w-full'></div>
					<Link
						className='whitespace-nowrap text-white bg-purple-500 p-2 text-xs rounded-sm'
						href='/api/auth/signout'
					>
						Đăng Xuất
					</Link>
				</nav>
			</header>
			<main className='h-full'>{children}</main>
			{/* <footer>Đặt nội dung footer ở đây</footer> */}
		</div>
	);
}

export default HomeLayout;
