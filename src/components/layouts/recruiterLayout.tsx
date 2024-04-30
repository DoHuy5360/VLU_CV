import Link from "next/link";

export default async function RecruiterLayout({ children }: { children: JSX.Element }) {
	return (
		<div className='h-dvh flex flex-col'>
			<div className='flex gap-2 border-b-[1px] border-slate-200 p-2'>
				<Link href='/recruiter' className='text-xs underline '>
					Đăng tuyển
				</Link>
				<Link href='/recruiter/recruitment' className='text-xs underline '>
					Đơn tuyển dụng của tôi
				</Link>
			</div>
			{children}
		</div>
	);
}
