import Link from "next/link";

function HomeLayout({ children }: { children: JSX.Element }) {
	return (
		<div>
			<header>
				<nav className='flex gap-2'>
					<Link className='px-2 py-1 hover:bg-slate-300' href='/home'>
						Trang chủ
					</Link>
					<Link className='px-2 py-1 hover:bg-slate-300' href='/cv'>
						CV của tôi
					</Link>
				</nav>
			</header>
			<main>{children}</main>
			<footer>{/* Đặt nội dung footer ở đây */}</footer>
		</div>
	);
}

export default HomeLayout;
