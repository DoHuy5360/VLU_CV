"use client";

import {
	FormProvider,
	UseFormHandleSubmit,
	useForm,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDataSchema } from "@/validation/userData";
import { z } from "zod";
import Information from "./partial/information";
import Group from "./group";
import Experience from "./partial/experience";
import { createContext } from "vm";
import Goal from "./partial/goal";
import Project from "./partial/project";
import Education from "./partial/education";
import Skill from "./partial/skill";
import Badge from "./partial/badge";
import Certificate from "./partial/certificate";
import Reference from "./partial/reference";
import Activity from "./partial/activity";
import Hobby from "./partial/hobby";
import Other from "./partial/other";
import { createReplica } from "@/actions/candidate/createReplica";

export type deType = z.infer<typeof userDataSchema>;

export type UserDataForm = z.infer<typeof userDataSchema>;

export default function EditCvForm({
	cvName,
	handleSubmit,
}: {
	cvName: string;
	handleSubmit: UseFormHandleSubmit<UserDataForm>;
}) {
	const CvReplicaPreValidation = (data: UserDataForm) => {
		console.log(data);
		return true;
	};
	{
	}
	return (
		<form
			className='w-2/3 px-2 pt-2 pb-20 flex flex-col gap-2 overflow-y-scroll border-slate-300 border-r-[1px]'
			action={async () => {
				handleSubmit(async (data) => {
					const isValid = CvReplicaPreValidation(data);
					if (isValid) {
						const isSuccess = await createReplica(cvName, data);
						if (isSuccess) alert("Success");
					}
				})();
			}}
		>
			<div className='flex flex-col gap-2'>
				<Information />
				<Goal />
				<Experience />
				<Project />
				<Education />
				<Skill />
				<Badge />
				<Certificate />
				<Reference />
				<Activity />
				<Hobby />
				<Other />
			</div>
			<button
				className='w-fit px-4 py-2 ml-auto bg-green-300 rounded-lg text-xs'
				type='submit'
			>
				Save
			</button>
		</form>
	);
}
