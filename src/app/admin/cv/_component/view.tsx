"use client";
import { addNewCV } from "@/actions/admin/addNewCV";
import GreenSubmit from "@/components/button/greenSubmit";
import SelectFile from "@/components/button/selectFile";
import FormErrors from "@/components/notification/formErrors";
import { Transfer } from "@/types/tranfer";
import { UserData } from "@/types/userData";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { RiArrowDownSFill } from "react-icons/ri";
import { z } from "zod";
import GetThumbnailFromHtml from "./html2image";

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
				<div className='flex flex-grow basis-1/2'>
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
									<SelectFile name='Chọn ảnh bìa' htmlFor='cvThumbnail' />
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
								<Image src={getValues("thumbnail") || "/image/user.jpg"} className='border-[1px] h-fit' width={300} height={350} alt='cv thumbnail' />
								<input {...register("thumbnail")} type='hidden' />
							</div>
						</div>
						<GreenSubmit />
					</form>
				</div>
				{getValues("name") !== "" && (
					<div className='flex-grow basis-1/2 overflow-y-scroll h-full'>
						<div id='previewCV'>{Transfer[getValues("name")](temporaryDataCV)}</div>
					</div>
				)}
			</div>
		</div>
	);
}
const temporaryDataCV: UserData = {
	name: "Placeholder",
	template: "Placeholder",
	attrs: {
		head: {
			name: "Placeholder",
			avatar: "/image/user.jpg",
			position: "Placeholder",
			phone: "Placeholder",
			email: "Placeholder",
			address: "Placeholder",
			website: "Placeholder",
			birth: "Placeholder",
			gender: "Placeholder",
		},
		goal: {
			title: "Goal",
			content: "Placeholder",
		},
		experience: {
			title: "Experience",
			works: [
				{
					id: "Placeholder",
					name: "Placeholder",
					position: "Placeholder",
					tasks: "Placeholder",
					time: "Placeholder",
				},
			],
		},
		project: {
			title: "Project",
			products: [
				{
					id: "Placeholder",
					name: "Placeholder",
					time: "Placeholder",
					where: "Placeholder",
					member: "Placeholder",
					position: "Placeholder",
					tasks: "Placeholder",
					techs: "Placeholder",
				},
			],
		},
		education: {
			title: "Education",
			classes: [
				{
					id: "Placeholder",
					time: "Placeholder",
					major: "Placeholder",
					school: "Placeholder",
					status: "Placeholder",
				},
			],
		},
		skill: {
			title: "Skills",
			skills: [
				{
					id: "Placeholder",
					name: "Placeholder",
					status: "Placeholder",
				},
			],
		},
		badge: {
			title: "Badge",
			achievements: [
				{
					id: "Placeholder",
					time: "Placeholder",
					name: "Placeholder",
					where: "Placeholder",
				},
			],
		},
		certificate: {
			title: "Certificate",
			certificates: [
				{
					id: "Placeholder",
					time: "Placeholder",
					name: "Placeholder",
					where: "Placeholder",
				},
			],
		},
		reference: {
			title: "Reference",
			references: [
				{
					id: "Placeholder",
					name: "Placeholder",
					where: "Placeholder",
					phone: "Placeholder",
				},
			],
		},
		activity: {
			title: "Activity",
			activities: [
				{
					id: "Placeholder",
					time: "Placeholder",
					name: "Placeholder",
					position: "Placeholder",
					tasks: "Placeholder",
				},
			],
		},
		hobby: {
			title: "Hobby",
			hobbies: [
				{
					id: "Placeholder",
					name: "Placeholder",
					status: "Placeholder",
				},
			],
		},
		other: {
			title: "Other",
			content: "Placeholder",
		},
	},
};
