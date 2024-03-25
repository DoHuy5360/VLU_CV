import CvProvider from "@/contexts/cvProvider";
import Link from "next/link";

function HomeLayout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col'>
			<header className='border-b-[1px] border-slate-200'>
				<nav className='flex gap-2'>
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
