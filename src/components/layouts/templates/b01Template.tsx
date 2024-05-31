import { PortfolioFormData } from "@/entities/getDataPortfolio";
import Image from "next/image";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
export default function B01Template(data: PortfolioFormData) {
	return (
		<div className='flex flex-col relative bg-white'>
			<div className='flex items-center justify-center sticky top-0 bg-white border-b-[1px]'>
				<a href='#P-Contact' className='p-2 cursor-pointer'>
					Contacts
				</a>
				<a href='#P-About' className='p-2 cursor-pointer'>
					About
				</a>
				<a href='#P-Skill' className='p-2 cursor-pointer'>
					Skills
				</a>
				<a href='#P-Experience' className='p-2 cursor-pointer'>
					Experiences
				</a>
				<a href='#P-Projects' className='p-2 cursor-pointer'>
					Projects
				</a>
			</div>
			<div className='flex flex-col p-32 gap-24' style={{ scrollBehavior: "smooth" }}>
				<div id='P-Contact' className='flex items-center'>
					<div className='flex flex-col gap-6'>
						<div className='flex flex-col'>
							<div className='whitespace-nowrap'>Hello, I&apos;m {data.personal.name}</div>
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
				<div id='P-About' className='flex items-center'>
					<div className='flex-grow basis-1/2 grid place-items-center'>
						{data.about.images.map((i) => (
							<Image key={i.id} src={i.src || "/image/user.jpg"} width={200} height={200} className='outline outline-4 outline-slate-200' alt={i.label} />
						))}
					</div>
					<div className='flex-grow basis-1/2 flex flex-col gap-4'>
						<div className='bg-slate-100 rounded-md p-1 w-fit'>About me</div>
						<div className='flex flex-col gap-3 whitespace-pre-line'>{data.about.content}</div>
					</div>
				</div>
				<div id='P-Skill' className='flex flex-col items-center gap-3'>
					<div className='bg-slate-100 rounded-md p-1 w-fit'>Skills</div>
					<div>I&apos;m good at those skills</div>
					<div className='flex gap-2'>
						{data.skills.map((e) => {
							return (
								<div key={e.id} className='flex flex-col gap-2 items-center'>
									<Image src={e.icon || "/image/user.jpg"} width={40} height={40} alt={e.name} />
									<div>{e.name}</div>
								</div>
							);
						})}
					</div>
				</div>
				<div id='P-Experience' className='flex flex-col items-center gap-3'>
					<div className='bg-slate-100 rounded-md p-1 w-fit'>Experiences</div>
					<div>Here is a quick summary of my most recent experiences</div>
					<div className='flex flex-col gap-3'>
						{data.experiences.map((e) => {
							return (
								<div key={e.id} className='grid grid-cols-3 rounded-lg border-[1px] p-4 overflow-hidden'>
									<div>
										{e.images.map((i) => (
											<Image key={i.id} src={i.src} width={100} height={100} className='outline outline-4 outline-slate-200' alt={i.label} />
										))}
									</div>
									<div className='flex flex-col gap-2'>
										<div className='font-bold'>{e.name}</div>
										<div className='flex flex-col gap-1'>
											<div>{e.position}</div>
											<div className='whitespace-pre-line'>{e.tasks}</div>
										</div>
									</div>
									<div className='justify-self-end'>{e.time}</div>
								</div>
							);
						})}
					</div>
				</div>
				<div id='P-Projects' className='flex flex-col items-center gap-3'>
					<div className='bg-slate-100 rounded-md p-1 w-fit'>Projects</div>
					<div>Some of projects I had done</div>
					<div className='flex flex-col gap-3'>
						{data.projects.map((e) => {
							return (
								<div key={e.id} className='grid grid-cols-2 border-[1px] rounded-lg overflow-hidden'>
									<div>
										{e.images.map((i) => (
											<Image key={e.id} src={i.src || "/image/user.jpg"} width={400} height={400} className='w-auto h-auto' alt={i.label} />
										))}
									</div>
									<div className='flex flex-col gap-4 border-l-[1px] p-4'>
										<div className='font-bold'>{e.name}</div>
										<div className='whitespace-pre-line'>{e.tasks}</div>
										<div className='flex gap-1'>
											{e.technologies.map((t) => (
												<div key={t.id} className='rounded-lg text-xs p-1 bg-slate-200'>
													{t.name}
												</div>
											))}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
