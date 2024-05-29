"use client";

import { SubmitHandler, useFormContext } from "react-hook-form";
import { Wrapper } from "./wrapper";
import editInput from "./editInput";
import editArea from "./editArea";
import { GoGoal } from "react-icons/go";
import { RxRocket } from "react-icons/rx";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoIosGitBranch } from "react-icons/io";
import { MdInfoOutline } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import ReferenceEdit from "./referenceEdit";
import { Buttons } from "@/components/button/buttons";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import EditPortfolioAvatar from "@/app/candidate/profile/_component/editPortfolioAvatar";
import Personal from "@/components/portfolioEditFields.tsx/editFields/personal";
import About from "@/components/portfolioEditFields.tsx/editFields/about";
import Experience from "@/components/portfolioEditFields.tsx/editFields/experience";
import Project from "@/components/portfolioEditFields.tsx/editFields/project";
import Skill from "@/components/portfolioEditFields.tsx/editFields/skill";
import Social from "@/components/portfolioEditFields.tsx/editFields/social";
import EditAboutImage from "@/app/candidate/profile/_component/editAboutImage";
import EditExperienceImage from "@/app/candidate/profile/_component/editExperienceImage";
import EditProjectImage from "@/app/candidate/profile/_component/editProjectImage";
import EditProjectTechnology from "@/app/candidate/profile/_component/editProjectTechnology";
import EditSkillImage from "@/app/candidate/profile/_component/editSkillImage";

export default function EditCvForm({ onSubmit }: { onSubmit: SubmitHandler<PortfolioFormData> }) {
	const { handleSubmit } = useFormContext<PortfolioFormData>();
	return (
		<div className='flex basis-1/3 flex-grow-1 h-full'>
			<div className='flex flex-col text-sm items-center'>
				<ReferenceEdit href='#Personal' icon={<MdInfoOutline />} />
				{/* <ReferenceEdit href='#Greeting' icon={<GoGoal />} /> */}
				<ReferenceEdit href='#Introduction' icon={<GoGoal />} />
				<ReferenceEdit href='#Experience' icon={<IoBookmarkOutline />} />
				<ReferenceEdit href='#Project' icon={<RxRocket />} />
				<ReferenceEdit href='#Skill' icon={<IoIosGitBranch />} />
				<ReferenceEdit href='#Certificate' icon={<PiCertificate />} />
			</div>
			<form
				style={{
					scrollBehavior: "smooth",
				}}
				className='w-full p-2 mb-32 h-full flex flex-col gap-2 overflow-y-scroll border-slate-300 border-x-[1px]'
				action={async () => {
					handleSubmit(onSubmit)();
				}}
			>
				<div className='flex flex-col gap-2'>
					<div id='Personal'>
						<Personal Wrapper={Wrapper} Input={editInput} Avatar={EditPortfolioAvatar} hideField={{ fileName: false }} />
					</div>
					{/* <div id='Greeting'>
						<About Wrapper={Wrapper} Area={editArea} Image={EditAboutImage} />
					</div> */}
					<div id='Introduction'>
						<About Wrapper={Wrapper} Area={editArea} Image={EditAboutImage} />
					</div>
					<div id='Experience'>
						<Experience Wrapper={Wrapper} Input={editInput} Area={editArea} Image={EditExperienceImage} />
					</div>
					<div id='Project'>
						<Project Wrapper={Wrapper} Input={editInput} Area={editArea} Image={EditProjectImage} Select={EditProjectTechnology} />
					</div>
					<div id='Skill'>
						<Skill Wrapper={Wrapper} Input={editInput} Image={EditSkillImage} />
					</div>
					<div id='Certificate'>
						<Social Wrapper={Wrapper} Input={editInput} />
					</div>
				</div>
				<Buttons.Submit.Save />
			</form>
		</div>
	);
}
