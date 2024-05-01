import Link from "next/link";

export default async function RecruiterLayout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col'>
			<div className='flex gap-2 justify-between border-b-[1px] border-slate-200 p-2'>
				<div className='flex gap-2 items-center'>
					<Link href='/home' className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'>
						Trang chủ
					</Link>
					<Link href='/recruiter' className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'>
						Đăng tuyển
					</Link>
					<Link href='/recruiter/recruitment' className='whitespace-nowrap px-2 py-1 hover:bg-slate-300'>
						Đơn tuyển dụng của tôi
					</Link>
				</div>
				<Link className='whitespace-nowrap text-white bg-purple-500 p-2 text-xs rounded-sm' href='/api/auth/signout'>
					Đăng Xuất
				</Link>
			</div>
			{children}
		</div>
	);
}
