import Link from "next/link";

function IllustrateLayout({ children }: { children: JSX.Element }) {
	return (
		<div>
			<header>
				<nav className='flex gap-2'>
					<Link className='px-2 py-1 hover:bg-slate-300' href='/register'>
						Đăng ký
					</Link>
					<Link className='px-2 py-1 hover:bg-slate-300' href='/login'>
						Đăng nhập
					</Link>
				</nav>
			</header>
			<main>{children}</main>
			<footer>{/* Đặt nội dung footer ở đây */}</footer>
		</div>
	);
}

export default IllustrateLayout;
