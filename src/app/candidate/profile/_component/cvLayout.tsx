"use client";
import { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileDataSchema } from "@/validation/userData";
import Tab from "./tab";
import Activity from "@/components/cvEditFields/editFields/activity";
import { Wrapper } from "./wrapper";
import Personal from "@/components/cvEditFields/editFields/personal";
import Badge from "@/components/cvEditFields/editFields/badge";
import Goal from "@/components/cvEditFields/editFields/goal";
import editArea from "./editArea";
import editInput from "./editInput";
import Experience from "@/components/cvEditFields/editFields/experience";
import Project from "@/components/cvEditFields/editFields/project";
import Education from "@/components/cvEditFields/editFields/education";
import Skill from "@/components/cvEditFields/editFields/skill";
import Certificate from "@/components/cvEditFields/editFields/certificate";
import Reference from "@/components/cvEditFields/editFields/reference";
import Hobby from "@/components/cvEditFields/editFields/hobby";
import Other from "@/components/cvEditFields/editFields/other";
import editAvatar from "./editAvatar";
import ViewLayout, { CandidateProfileProp } from "./viewLayout";
import { ProfileTabContext } from "@/contexts/profileTabContext";

export default function CvLayout({ profile }: { profile: CandidateProfileProp }) {
	const { currentTab } = useContext(ProfileTabContext);
	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userProfileDataSchema),
		defaultValues: profile.data,
	});

	return (
		<ViewLayout
			formTools={formTools}
			objectData={profile}
			tabs={
				<>
					<Tab title='Thông tin cơ bản' name='Personal' isError={formTools.formState.errors.attrs?.head} />
					<Tab title='Mục tiêu' name='Goal' isError={formTools.formState.errors.attrs?.goal} />
					<Tab title='Học vấn' name='Education' isError={formTools.formState.errors.attrs?.education} />
					<Tab title='Kỹ năng' name='Skill' isError={formTools.formState.errors.attrs?.skill} />
					<Tab title='Kinh nghiệm' name='Experience' isError={formTools.formState.errors.attrs?.experience} />
					<Tab title='Dự án' name='Project' isError={formTools.formState.errors.attrs?.project} />
					<Tab title='Chứng chỉ' name='Certificate' isError={formTools.formState.errors.attrs?.certificate} />
					<Tab title='Danh hiệu' name='Badge' isError={formTools.formState.errors.attrs?.badge} />
					<Tab title='Hoạt động' name='Activity' isError={formTools.formState.errors.attrs?.activity} />
					<Tab title='Tham chiếu' name='Reference' isError={formTools.formState.errors.attrs?.reference} />
					<Tab title='Sở thích' name='Hobby' isError={formTools.formState.errors.attrs?.hobby} />
					<Tab title='Khác' name='Other' isError={formTools.formState.errors.attrs?.other} />
				</>
			}
			views={
				<>
					{currentTab === "Personal" && <Personal Wrapper={Wrapper} Input={editInput} Avatar={editAvatar} hideField={{ fileName: true }} />}
					{currentTab === "Goal" && <Goal Wrapper={Wrapper} Area={editArea} />}
					{currentTab === "Experience" && <Experience Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{currentTab === "Project" && <Project Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{currentTab === "Education" && <Education Wrapper={Wrapper} Input={editInput} />}
					{currentTab === "Skill" && <Skill Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{currentTab === "Badge" && <Badge Wrapper={Wrapper} Input={editInput} />}
					{currentTab === "Certificate" && <Certificate Wrapper={Wrapper} Input={editInput} />}
					{currentTab === "Reference" && <Reference Wrapper={Wrapper} Input={editInput} />}
					{currentTab === "Activity" && <Activity Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{currentTab === "Hobby" && <Hobby Wrapper={Wrapper} Input={editInput} />}
					{currentTab === "Other" && <Other Wrapper={Wrapper} Area={editArea} />}
				</>
			}
		/>
	);
}
