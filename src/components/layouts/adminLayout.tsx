import Link from "next/link";

export default async function AdminLayout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col'>
			<div className='flex gap-2 justify-between border-b-[1px] border-slate-200 p-2'>
				<div className='flex gap-2 items-center'>
					<Link href='/admin' className='text-xs underline'>
						Trang quản trị
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
