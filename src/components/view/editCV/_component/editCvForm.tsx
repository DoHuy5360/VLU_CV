"use client";

import { SubmitHandler, useFormContext } from "react-hook-form";
import { userDataSchema } from "@/validation/userData";
import { z } from "zod";
import Experience from "../../../cvEditFields/editFields/experience";
import Goal from "../../../cvEditFields/editFields/goal";
import Project from "../../../cvEditFields/editFields/project";
import Education from "../../../cvEditFields/editFields/education";
import Skill from "../../../cvEditFields/editFields/skill";
import Badge from "../../../cvEditFields/editFields/badge";
import Certificate from "../../../cvEditFields/editFields/certificate";
import Reference from "../../../cvEditFields/editFields/reference";
import Hobby from "../../../cvEditFields/editFields/hobby";
import Other from "../../../cvEditFields/editFields/other";
import Activity from "@/components/cvEditFields/editFields/activity";
import { Wrapper } from "./wrapper";
import editInput from "./editInput";
import editArea from "./editArea";
import Personal from "@/components/cvEditFields/editFields/personal";
import editAvatar from "./editAvatar";
import { GoGoal, GoHeart } from "react-icons/go";
import { RxRocket } from "react-icons/rx";
import { IoBookmarkOutline, IoSchoolOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { LiaCertificateSolid, LiaUserTagSolid } from "react-icons/lia";
import { CiSquarePlus } from "react-icons/ci";
import { MdInfoOutline } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { BsActivity } from "react-icons/bs";
import ReferenceEdit from "./referenceEdit";

export type UserDataForm = z.infer<typeof userDataSchema>;

export default function EditCvForm({ onSubmit }: { onSubmit: SubmitHandler<UserDataForm> }) {
	const { handleSubmit } = useFormContext<UserDataForm>();
	return (
		<div className='flex basis-1/3 flex-grow-1 h-full'>
			<div className='flex flex-col text-sm items-center'>
				<ReferenceEdit href='#Personal' icon={<MdInfoOutline />} />
				<ReferenceEdit href='#Goal' icon={<GoGoal />} />
				<ReferenceEdit href='#Experience' icon={<IoBookmarkOutline />} />
				<ReferenceEdit href='#Project' icon={<RxRocket />} />
				<ReferenceEdit href='#Education' icon={<IoSchoolOutline />} />
				<ReferenceEdit href='#Skill' icon={<IoIosGitBranch />} />
				<ReferenceEdit href='#Badge' icon={<LiaCertificateSolid />} />
				<ReferenceEdit href='#Certificate' icon={<PiCertificate />} />
				<ReferenceEdit href='#Reference' icon={<LiaUserTagSolid />} />
				<ReferenceEdit href='#Activity' icon={<BsActivity />} />
				<ReferenceEdit href='#Hobby' icon={<GoHeart />} />
				<ReferenceEdit href='#Other' icon={<CiSquarePlus />} />
			</div>
			<form
				style={{
					scrollBehavior: "smooth",
				}}
				className='w-full pt-2 pl-1 mb-32 h-full pb-2 flex flex-col gap-2 overflow-y-scroll border-slate-300 border-x-[1px]'
				action={async () => {
					handleSubmit(onSubmit)();
				}}
			>
				<div className='flex flex-col gap-2'>
					<div id='Personal'>
						<Personal Wrapper={Wrapper} Input={editInput} Avatar={editAvatar} />
					</div>
					<div id='Goal'>
						<Goal Wrapper={Wrapper} Area={editArea} />
					</div>
					<div id='Experience'>
						<Experience Wrapper={Wrapper} Input={editInput} Area={editArea} />
					</div>
					<div id='Project'>
						<Project Wrapper={Wrapper} Input={editInput} Area={editArea} />
					</div>
					<div id='Education'>
						<Education Wrapper={Wrapper} Input={editInput} />
					</div>
					<div id='Skill'>
						<Skill Wrapper={Wrapper} Input={editInput} Area={editArea} />
					</div>
					<div id='Badge'>
						<Badge Wrapper={Wrapper} Input={editInput} />
					</div>
					<div id='Certificate'>
						<Certificate Wrapper={Wrapper} Input={editInput} />
					</div>
					<div id='Reference'>
						<Reference Wrapper={Wrapper} Input={editInput} />
					</div>
					<div id='Activity'>
						<Activity Wrapper={Wrapper} Input={editInput} Area={editArea} />
					</div>
					<div id='Hobby'>
						<Hobby Wrapper={Wrapper} Input={editInput} />
					</div>
					<div id='Other'>
						<Other Wrapper={Wrapper} Area={editArea} />
					</div>
				</div>
				<button className='w-fit px-4 py-2 ml-auto bg-green-300 rounded-lg text-xs' type='submit'>
					Lưu
				</button>
			</form>
		</div>
	);
}
