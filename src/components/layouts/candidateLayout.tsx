import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import GrayLink from "../button/grayLink";
import { Buttons } from "../button/buttons";

export default async function CandidateLayout({ children }: { children: JSX.Element }) {
	const session = await getServerSession(authOptions);
	return (
		<div className='h-dvh flex flex-col'>
			<div className='flex gap-2 border-b-[1px] border-slate-200 p-2 text-sm justify-between'>
				<div className='max-w-10 max-h-10 rounded-full bg-slate-200 border-slate-200 border-[1px] overflow-hidden'>
					<Image src={session?.user.image || "/image/user.jpg"} width={40} height={40} className='object-cover' alt='Avatar' draggable={false} />
				</div>
				<div className='flex gap-2 items-center'>
					<GrayLink text='Trang chủ' href='/home' />
					<GrayLink text='Hồ sơ' href='/candidate/profile' />
					<GrayLink text='CV của tôi' href='/candidate/cv' />
					<GrayLink text='Mẫu CV' href='/template/cv' />
					<GrayLink text='Portfolio của tôi' href='/candidate/portfolio' />
					<GrayLink text='Mẫu Portfolio' href='/template/portfolio' />
				</div>
				<div className='flex items-center gap-2 text-sm'>
					<Buttons.Solid.Cyan.Link text='Đăng Xuất' href='/api/auth/signout' />
				</div>
			</div>
			{children}
		</div>
	);
}
