"use client";
import { addNewCV } from "@/actions/admin/addNewCV";
import GreenSubmit from "@/components/button/greenSubmit";
import SelectFile from "@/components/button/selectFile";
import Submit from "@/components/button/submit";
import { Transfer } from "@/types/tranfer";
import { UserData } from "@/types/userData";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IoImageOutline } from "react-icons/io5";
import { z } from "zod";

const cvTemplateSchema = z.object({
	name: z.string().min(1, "Hãy chọn mẫu CV"),
	// .refine((value)=>{
	//     return
	// }),
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
	return (
		<div className='flex-grow overflow-hidden h-full'>
			<div className='flex gap-2 h-full'>
				<div className='flex flex-grow basis-1/3'>
					<form
						ref={formRef}
						action={() => {
							handleSubmit(async (data: CvDataForm) => {
								await addNewCV(data);
								formRef.current?.reset();
							})();
						}}
						className='flex flex-col gap-1 p-2 text-sm bg-white border-r-[1px]'
					>
						<div>Tên mẫu CV</div>
						<input {...register("name")} className='px-2 py-1 bg-white border-[1px]' name='name' type='text' disabled />
						<div>{errors.name?.message}</div>
						<SelectFile name='Chọn ảnh bìa cho CV' htmlFor='cvThumbnail' />
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
						<div>{errors.thumbnail?.message}</div>
						<Image src={getValues("thumbnail") || "/image/user.jpg"} className='border-[1px]' width={100} height={150} alt='cv thumbnail' />
						<input {...register("thumbnail")} type='hidden' />
						<GreenSubmit />
					</form>
					<div className='flex flex-col border-r-[1px]'>
						{fileTemplates.map((fileName, i) => {
							return (
								<div
									key={i}
									onClick={() => {
										setValue("name", fileName);
										trigger("name");
									}}
									className='cursor-pointer hover:bg-slate-200 text-sm p-1'
								>
									{fileName}
								</div>
							);
						})}
					</div>
				</div>
				{getValues("name") !== "" && <div className='flex-grow basis-2/3 overflow-y-scroll h-full'>{Transfer[getValues("name")](temporaryDataCV)}</div>}
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
