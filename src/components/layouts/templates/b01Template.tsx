import { PortfolioFormData } from "@/entities/getDataPortfolio";
import Image from "next/image";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
export default function B01Template(data: PortfolioFormData) {
	return (
		<div>
			<div className='flex flex-col'>
				<div className='flex items-center justify-center'>
					<div className='p-2 cursor-pointer'>Contact</div>
					<div className='p-2 cursor-pointer'>About</div>
					<div className='p-2 cursor-pointer'>Experience</div>
					<div className='p-2 cursor-pointer'>Projects</div>
				</div>
				<div className='flex flex-col p-32 gap-24'>
					<div className='flex items-center'>
						<div className='flex flex-col gap-6'>
							<div className='flex flex-col'>
								<div className='whitespace-nowrap'>Hello, I'm {data.personal.name}</div>
								<div className='w-2/3'>{data.greeting?.content}</div>
							</div>
							<div className='flex items-baseline gap-2'>
								<div>
									<IoLocationSharp />
								</div>
								<div>{data.personal.address}</div>
							</div>
							<div className='flex gap-2'>
								<div>
									<BsGithub />
								</div>
								<div>
									<BsLinkedin />
								</div>
								<div>
									<BsFacebook />
								</div>
							</div>
						</div>
						<div className='flex-grow basis-1/2 grid place-items-center'>
							<Image src={data.personal.avatar || "/image/user.jpg"} width={200} height={200} className='outline outline-4 outline-slate-200' alt='avatar' />
						</div>
					</div>
					<div className='flex items-center'>
						<div className='flex-grow basis-1/2 grid place-items-center'>
							{data.about.images.map((i) => (
								<Image key={i.id} src={i.src || "/image/user.jpg"} width={200} height={200} className='outline outline-4 outline-slate-200' alt={i.label} />
							))}
						</div>
						<div className='flex-grow basis-1/2 flex flex-col gap-4'>
							<div>About me</div>
							<div className='flex flex-col gap-3 whitespace-pre-line'>{data.about.content}</div>
						</div>
					</div>
					<div className='flex flex-col items-center gap-3'>
						<div>Skills</div>
						<div>I'm good at those skills</div>
						<div className='flex gap-2'>
							<div className='flex flex-col gap-2 items-center'>
								<Image src='/image/user.jpg' width={40} height={40} alt='' />
								<div>Skill name</div>
							</div>
							<div className='flex flex-col gap-2 items-center'>
								<Image src='/image/user.jpg' width={40} height={40} alt='' />
								<div>Skill name</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center gap-3'>
						<div>Experiences</div>
						<div>Here is a quick summary of my most recent experiences</div>
						<div className='flex flex-col gap-3'>
							<div className='grid grid-cols-3 rounded-lg border-[1px] p-4 overflow-hidden'>
								<div>
									<Image src='/image/user.jpg' width={100} height={100} alt='' />
								</div>
								<div className='flex flex-col gap-2'>
									<div className='font-bold'>Name</div>
									<div className='flex flex-col gap-1'>
										<div>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia temporibus reprehenderit similique, aspernatur blanditiis minus, veniam esse dolor aut earum aliquam illum
											placeat ullam possimus. Dolorem accusantium ipsam vero ad.
										</div>
										<div>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia temporibus reprehenderit similique, aspernatur blanditiis minus, veniam esse dolor aut earum aliquam illum
											placeat ullam possimus. Dolorem accusantium ipsam vero ad.
										</div>
										<div>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia temporibus reprehenderit similique, aspernatur blanditiis minus, veniam esse dolor aut earum aliquam illum
											placeat ullam possimus. Dolorem accusantium ipsam vero ad.
										</div>
									</div>
								</div>
								<div className='justify-self-end'>nov 2024 - present</div>
							</div>
							<div className='grid grid-cols-3 rounded-lg border-[1px] p-4 overflow-hidden'>
								<div>
									<Image src='/image/user.jpg' width={100} height={100} alt='' />
								</div>
								<div className='flex flex-col gap-2'>
									<div className='font-bold'>Name</div>
									<div className='flex flex-col gap-1'>
										<div>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia temporibus reprehenderit similique, aspernatur blanditiis minus, veniam esse dolor aut earum aliquam illum
											placeat ullam possimus. Dolorem accusantium ipsam vero ad.
										</div>
										<div>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia temporibus reprehenderit similique, aspernatur blanditiis minus, veniam esse dolor aut earum aliquam illum
											placeat ullam possimus. Dolorem accusantium ipsam vero ad.
										</div>
										<div>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia temporibus reprehenderit similique, aspernatur blanditiis minus, veniam esse dolor aut earum aliquam illum
											placeat ullam possimus. Dolorem accusantium ipsam vero ad.
										</div>
									</div>
								</div>
								<div className='justify-self-end'>nov 2024 - present</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center gap-3'>
						<div>Projects</div>
						<div>Some of projects I had done</div>
						<div className='flex flex-col gap-3'>
							<div className='grid grid-cols-2 border-[1px] rounded-lg overflow-hidden'>
								<Image src='/image/user.jpg' width={400} height={400} className='w-auto h-auto' alt='' />
								<div className='flex flex-col gap-4 border-l-[1px] p-4'>
									<div className='font-bold'>Name</div>
									<div>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae libero autem placeat consequuntur. Eligendi corrupti vero eum, repellendus neque rerum cum itaque,
										veritatis nesciunt beatae asperiores dolor distinctio praesentium.
									</div>
									<div className='flex gap-1'>
										<div className='rounded-lg px-2 py-1 bg-slate-200'>React</div>
										<div className='rounded-lg px-2 py-1 bg-slate-200'>Next</div>
									</div>
								</div>
							</div>
							<div className='grid grid-cols-2 border-[1px] rounded-lg overflow-hidden'>
								<Image src='/image/user.jpg' width={400} height={400} className='w-auto h-auto' alt='' />
								<div className='flex flex-col gap-4 border-l-[1px] p-4'>
									<div className='font-bold'>Name</div>
									<div>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto molestiae libero autem placeat consequuntur. Eligendi corrupti vero eum, repellendus neque rerum cum itaque,
										veritatis nesciunt beatae asperiores dolor distinctio praesentium.
									</div>
									<div className='flex gap-1'>
										<div className='rounded-lg px-2 py-1 bg-slate-200'>React</div>
										<div className='rounded-lg px-2 py-1 bg-slate-200'>Next</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
