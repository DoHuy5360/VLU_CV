import Link from "next/link";

export default async function CandidateLayout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col'>
			<div className='flex gap-2 border-b-[1px] border-slate-200 p-2 text-sm justify-between'>
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
					<Link className='whitespace-nowrap text-white bg-purple-500 p-2 text-xs rounded-sm' href='/api/auth/signout'>
						Đăng Xuất
					</Link>
				</div>
			</div>
			{children}
		</div>
	);
}
