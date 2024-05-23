"use client";
import { addNewCV } from "@/actions/admin/addNewCV";
import FormErrors from "@/components/notification/formErrors";
import { Transfer } from "@/types/tranfer";
import { UserData } from "@/types/userData";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { RiArrowDownSFill } from "react-icons/ri";
import { z } from "zod";
import GetThumbnailFromHtml from "./html2image";
import { Buttons } from "@/components/button/buttons";

const cvTemplateSchema = z.object({
	name: z.string().min(1, "Hãy chọn mẫu CV"),
	thumbnail: z.string().min(1, "Hãy chọn ảnh bìa cho CV"),
});

export type CvDataForm = z.infer<typeof cvTemplateSchema>;

export default function View({ fileTemplates }: { fileTemplates: string[] }) {
	const formRef = useRef<HTMLFormElement>(null);
	const {
		register,
		getValues,
		setValue,
		trigger,
		handleSubmit,
		formState: { errors },
	} = useForm<CvDataForm>({
		resolver: zodResolver(cvTemplateSchema),
		defaultValues: {
			name: "",
			thumbnail: "",
		},
	});
	const [isShowUnAddedCvTemplate, setShowUnAddedCvTemplate] = useState(false);
	return (
		<div className='flex-grow overflow-hidden h-full'>
			<div className='flex gap-2 h-full'>
				<div className='flex flex-grow xl:basis-1/2 sm:basis-1/3'>
					<form
						ref={formRef}
						action={() => {
							handleSubmit(async (data: CvDataForm) => {
								const isSuccess = await addNewCV(data);
								if (isSuccess) {
									setValue("name", "");
									setValue("thumbnail", "");
									alert("Thêm mẫu thành công");
								} else {
									alert("Thêm mẫu thất bại");
								}
							})();
						}}
						className='flex flex-col justify-between gap-1 p-2 text-sm flex-grow bg-white border-r-[1px]'
					>
						<div className='flex flex-grow gap-1'>
							<div className='flex flex-col'>
								<div
									onClick={() => {
										setShowUnAddedCvTemplate((pre) => !pre);
									}}
									className='flex items-center border-[1px] gap-2 rounded-sm whitespace-nowrap cursor-pointer p-1'
								>
									<div>{getValues("name") || "Tên mẫu CV"}</div>
									<div>
										<RiArrowDownSFill />
									</div>
								</div>
								<FormErrors message={errors.name?.message} />
								<div className={`${!isShowUnAddedCvTemplate && "hidden"} flex flex-col h-fit max-h-96 overflow-y-scroll border-[1px] translate-y-[-1px]`}>
									{fileTemplates.map((fileName, i) => {
										return (
											<div
												key={i}
												onClick={() => {
													setValue("name", fileName);
													trigger("name");
													setShowUnAddedCvTemplate(false);
												}}
												className='cursor-pointer hover:bg-slate-200 text-sm p-1'
											>
												{fileName}
											</div>
										);
									})}
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex gap-2'>
									<label htmlFor='cvThumbnail' className='w-fit'>
										<Buttons.Solid.Yellow.Click text='Chọn ảnh bìa' />
									</label>
									<GetThumbnailFromHtml
										id='previewCV'
										display={(dataURL: string) => {
											setValue("thumbnail", dataURL);
											trigger("thumbnail");
										}}
									/>
								</div>
								<input
									className='hidden'
									id='cvThumbnail'
									type='file'
									onChange={async (e) => {
										if (e.target.files !== null) {
											const file = e.target.files[0];
											try {
												setValue("thumbnail", await imageFileToBase64(file));
												trigger("thumbnail");
											} catch (error) {
												console.error("Error converting image to Base64:", error);
											}
										}
									}}
								/>
								<FormErrors message={errors.thumbnail?.message} />
								<Image src={getValues("thumbnail") || "/image/user.jpg"} className='border-[1px] h-fit' width={600} height={0} alt='cv thumbnail' />
								<input {...register("thumbnail")} type='hidden' />
							</div>
						</div>
						<Buttons.Submit.Save />
					</form>
				</div>
				{getValues("name") !== "" && (
					<div className='flex-grow xl:basis-1/2 sm:basis-2/3 overflow-y-scroll h-full'>
						<div id='previewCV'>{Transfer[getValues("name")](temporaryDataCV)}</div>
					</div>
				)}
			</div>
		</div>
	);
}
const temporaryDataCV: UserData = {
	name: "Candidate A",
	template: "Root",
	attrs: {
		head: {
			name: "Do Huy",
			avatar: "/image/user.jpg",
			position: "Web Developer - Fullstack",
			phone: "0963758993",
			email: "dohuy.200276@gmail.com",
			address: "Ho Chi Minh City, Binh Chanh District.",
			website: "https://github.com/DoHuy5360",
			birth: "17/08/2002",
			gender: "Male",
		},
		goal: {
			title: "Goal",
			content: "I am a [Name], with [number of years] years of experience in the field of software development. Throughout my career, I have been involved in many complex software projects, from design, programming, to deployment and system maintenance.",
		},
		experience: {
			title: "Experience",
			works: [
				{
					id: "Placeholder",
					name: "Urban Corporation",
					position: "Team lead, Backend",
					tasks: "Team management, Report, Daily meeting.",
					time: "3 months",
				},
			],
		},
		project: {
			title: "Project",
			products: [
				{
					id: "Placeholder",
					name: "LinKer Chat Application",
					time: "4 months",
					where: "Personal",
					member: "1 member",
					position: "Fullstack",
					tasks: "I do all tasks.",
					techs: "React, Socket.io, MongoDB, Firebase.",
				},
			],
		},
		education: {
			title: "Education",
			classes: [
				{
					id: "Placeholder",
					time: "2020 - 2024",
					major: "Information Technology",
					school: "Van Lang University",
					status: "Continues",
				},
			],
		},
		skill: {
			title: "Skills",
			skills: [
				{
					id: "Placeholder",
					name: "HTML, CSS, Javascript",
					status: "I'm pro at combo HTML, CSS and Javascript, this is group of basic technology used to learn at the beginning.",
				},
				{
					id: "Placeholder",
					name: "React",
					status: "I have critical experience at React. I had work on many projects that using React",
				},
			],
		},
		badge: {
			title: "Badge",
			achievements: [
				{
					id: "Placeholder",
					time: "3000",
					name: "Imagine World Champion",
					where: "Mars",
				},
			],
		},
		certificate: {
			title: "Certificate",
			certificates: [
				{
					id: "Placeholder",
					time: "2023",
					name: "C# Foundation",
					where: "Microsoft, freeCodeCamp",
				},
			],
		},
		reference: {
			title: "Reference",
			references: [
				{
					id: "Placeholder",
					name: "Ho Thi Ngoc",
					where: "ABC company",
					phone: "0900xxxxx0",
				},
			],
		},
		activity: {
			title: "Activity",
			activities: [
				{
					id: "Placeholder",
					time: "1 months",
					name: "Startup 2022",
					position: "Tech leader",
					tasks: "Manage Core of Project",
				},
			],
		},
		hobby: {
			title: "Hobby",
			hobbies: [
				{
					id: "Placeholder",
					name: "Play video games",
					status: "I play video games in my free time.",
				},
			],
		},
		other: {
			title: "Other",
			content: "Open for job.",
		},
	},
};
