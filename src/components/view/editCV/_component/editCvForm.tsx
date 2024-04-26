"use client";

import { FormProvider, SubmitHandler, UseFormHandleSubmit, useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDataSchema } from "@/validation/userData";
import { z } from "zod";
import Group from "./group";
import Experience from "../../../cvEditFields/editFields/experience";
import { createContext } from "vm";
import Goal from "../../../cvEditFields/editFields/goal";
import Project from "../../../cvEditFields/editFields/project";
import Education from "../../../cvEditFields/editFields/education";
import Skill from "../../../cvEditFields/editFields/skill";
import Badge from "../../../cvEditFields/editFields/badge";
import Certificate from "../../../cvEditFields/editFields/certificate";
import Reference from "../../../cvEditFields/editFields/reference";
import Hobby from "../../../cvEditFields/editFields/hobby";
import Other from "../../../cvEditFields/editFields/other";
import { createReplica } from "@/actions/candidate/createReplica";
import Activity from "@/components/cvEditFields/editFields/activity";
import { Wrapper } from "./wrapper";
import editInput from "./editInput";
import editArea from "./editArea";
import Personal from "@/components/cvEditFields/editFields/personal";

export type deType = z.infer<typeof userDataSchema>;

export type UserDataForm = z.infer<typeof userDataSchema>;

export default function EditCvForm({ onSubmit }: { onSubmit: SubmitHandler<UserDataForm> }) {
	const { handleSubmit } = useFormContext<UserDataForm>();
	return (
		<form
			className='h-dvh w-2/3 px-2 pt-2 pb-20 flex flex-col gap-2 overflow-y-scroll border-slate-300 border-r-[1px]'
			action={async () => {
				handleSubmit(onSubmit)();
			}}
		>
			<div className='flex flex-col gap-2'>
				<Personal Wrapper={Wrapper} Input={editInput} />
				<Goal Wrapper={Wrapper} Area={editArea} />
				<Experience Wrapper={Wrapper} Input={editInput} Area={editArea} />
				<Project Wrapper={Wrapper} Input={editInput} Area={editArea} />
				<Education Wrapper={Wrapper} Input={editInput} />
				<Skill Wrapper={Wrapper} Input={editInput} Area={editArea} />
				<Badge Wrapper={Wrapper} Input={editInput} />
				<Certificate Wrapper={Wrapper} Input={editInput} />
				<Reference Wrapper={Wrapper} Input={editInput} />
				<Activity Wrapper={Wrapper} Input={editInput} Area={editArea} />
				<Hobby Wrapper={Wrapper} Input={editInput} />
				<Other Wrapper={Wrapper} Area={editArea} />
			</div>
			<button className='w-fit px-4 py-2 ml-auto bg-green-300 rounded-lg text-xs' type='submit'>
				Save
			</button>
		</form>
	);
}
