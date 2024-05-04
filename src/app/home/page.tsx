import Image from "next/image";

export default function Home() {
	const events = [
		{
			id: "",
			thumbnail: "/image/vanlang_landscape/cs3_01.jpg",
			title: "Lễ tốt nghiệp khóa K26",
			createAt: "01/08/2025",
		},
		{
			id: "",
			thumbnail: "/image/vanlang_landscape/cs3_03.jpg",
			title: "Những lưu ý cần tránh khi tạo CV",
			createAt: "01/03/2024",
		},
		{
			id: "",
			thumbnail: "/image/vanlang_landscape/cs3_02.jpg",
			title: "Lịch nghỉ tết chính thức năm 2025",
			createAt: "01/02/2024",
		},
		{
			id: "",
			thumbnail: "/image/vanlang_landscape/cs3_01.jpg",
			title: "Ngày hội việc làm 2024",
			createAt: "01/01/2024",
		},
	];
	return (
		<div className='grid place-items-center flex-grow'>
			<div className='flex flex-col p-8 gap-3'>
				<div className='flex flex-col text-3xl text-center'>Tin tức - Sự kiện</div>
				<div className='grid place-items-center'>
					<div className='grid grid-cols-4 gap-2'>
						{events.map((e, i) => (
							<div key={i} className='flex flex-col rounded-sm border-[1px] overflow-hidden select-none'>
								<Image src={e.thumbnail} width={233} height={0} className='w-full aspect-video' alt='news' draggable={false} />
								<div className='flex flex-col flex-grow justify-between p-1 gap-3'>
									<div className='text-sm'>{e.title}</div>
									<div className='text-xs text-right'>{e.createAt}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
