import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { randomInRange } from "@/utils/random";
import Image from "next/image";

export default async function App() {
	const session = await getServerSession(authOptions);
	return (
		<div className='flex flex-col h-dvh'>
			<div className='flex justify-between bg-black border-b-[2px] border-red-300 p-2 w-full'>
				<Image width={100} height={24} className='w-auto h-auto' src='/image/logo/van-lang-logo-and-name.png' alt='Van Lang Logo' draggable={false} />
				{session ? (
					<div className='flex gap-2 items-center w-fit'>
						<Link href='/home' className='text-white p-2 text-xs outline outline-0 hover:outline-1 outline-slate-200'>
							Trang Chủ
						</Link>
						<div className='text-xs text-white'>{session.user?.name}</div>
						<Link className='text-white p-2 text-xs outline outline-0 hover:outline-1 outline-slate-200' href='/api/auth/signout'>
							Đăng Xuất
						</Link>
					</div>
				) : (
					<Link className='text-white p-2 text-xs outline outline-0 hover:outline-1 outline-slate-200' href='/auth'>
						Đăng Nhập
					</Link>
				)}
			</div>
			<div className='flex-grow h-full w-full overflow-hidden'>
				<div className='relative h-full overflow-y-scroll select-none'>
					<div className='absolute z-10 top-8 left-8 h-fit w-fit'>
						<div className='text-slate-200 xl:text-8xl sm:text-5xl ext-4xl font-bold'>Van Lang Jobs</div>
					</div>
					<div className='text-white absolute z-10 bottom-8 right-8 p-3 text-xs w-80 border-l-[5px] border-red-400'>
						Mang lại tác động truyền cảm hứng cho xã hội chính là sứ mệnh của Văn Lang. Kết nối nhiều lĩnh vực khác nhau, hòa trộn những bản sắc độc đáo, Văn Lang đã xây dựng nên một cộng đồng học
						thuật phong phú, lớn mạnh, khát khao tìm kiếm tri thức để tạo nên sự đổi mới, đột phá sáng tạo và một thế giới tốt đẹp hơn.
					</div>
					<div className='relative w-full h-full'>
						<div className='landscape_overlay w-full h-full absolute'></div>
						<Image width={1920} height={1080} className='w-full h-full object-cover' src={landscapes[randomInRange(0, 4)]} alt='van lang landscape' />
					</div>
				</div>
			</div>
		</div>
	);
}
const landscapes = [
	"/image/vanlang_landscape/cs3_01.jpg",
	"/image/vanlang_landscape/cs3_02.jpg",
	"/image/vanlang_landscape/cs3_03.jpg",
	"/image/vanlang_landscape/cs3_04.jpg",
	"/image/vanlang_landscape/cs3_05.jpg",
];
