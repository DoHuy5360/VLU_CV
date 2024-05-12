"use client";
import { useContext, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Tab from "./tab";
import { PortfolioFormData, portfolioData } from "@/entities/getDataPortfolio";
import ViewLayout, { CandidateProfileProp } from "./viewLayout";
import { Wrapper } from "./wrapper";
import editArea from "./editArea";
import editInput from "./editInput";
import Experience from "@/components/portfolioEditFields.tsx/editFields/experience";
import EditExperienceImage from "./editExperienceImage";
import Personal from "@/components/portfolioEditFields.tsx/editFields/personal";
import EditPortfolioAvatar from "./editPortfolioAvatar";
import About from "@/components/portfolioEditFields.tsx/editFields/about";
import EditAboutImage from "./editAboutImage";
import Social from "@/components/portfolioEditFields.tsx/editFields/social";
import Skill from "@/components/portfolioEditFields.tsx/editFields/skill";
import EditSkillImage from "./editSkillImage";
import Project from "@/components/portfolioEditFields.tsx/editFields/project";
import EditProjectImage from "./editProjectImage";
import EditProjectTechnology from "./editProjectTechnology";
import { ProfileTabContext } from "@/contexts/profileTabContext";

export default function PortfolioLayout({ profile }: { profile: CandidateProfileProp }) {
	const { currentTab } = useContext(ProfileTabContext);
	const formTools = useForm<PortfolioFormData>({
		resolver: zodResolver(portfolioData),
		defaultValues: profile.data,
	});
	return (
		<ViewLayout
			formTools={formTools}
			objectData={profile}
			tabs={
				<>
					<Tab title='Thông tin' name='Personal' isError={formTools.formState.errors.personal} />
					<Tab title='Giới thiệu' name='About' isError={formTools.formState.errors.about} />
					<Tab title='Kinh nghiệm' name='Experience' isError={formTools.formState.errors.experiences} />
					<Tab title='Dự án' name='Project' isError={formTools.formState.errors.projects} />
					<Tab title='Kỹ năng' name='Skill' isError={formTools.formState.errors.skills} />
					<Tab title='Mạng lưới' name='Social' isError={formTools.formState.errors.socials} />
				</>
			}
			views={
				<>
					{currentTab === "Personal" && <Personal Wrapper={Wrapper} Input={editInput} Avatar={EditPortfolioAvatar} hideField={{ fileName: true }} />}
					{currentTab === "Experience" && <Experience Wrapper={Wrapper} Input={editInput} Area={editArea} Image={EditExperienceImage} />}
					{currentTab === "About" && <About Wrapper={Wrapper} Area={editArea} Image={EditAboutImage} />}
					{currentTab === "Project" && <Project Wrapper={Wrapper} Input={editInput} Area={editArea} Image={EditProjectImage} Select={EditProjectTechnology} />}
					{currentTab === "Skill" && <Skill Wrapper={Wrapper} Input={editInput} Image={EditSkillImage} />}
					{currentTab === "Social" && <Social Wrapper={Wrapper} Input={editInput} />}
				</>
			}
		/>
	);
}
