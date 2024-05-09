import { FormProvider, UseFormReturn } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import Activity from "@/components/cvEditFields/editFields/activity";
import { Wrapper } from "./wrapper";
import Personal from "@/components/cvEditFields/editFields/personal";
import updateProfile from "@/actions/candidate/updateProfile";
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
import GreenSubmit from "@/components/button/greenSubmit";

export default function View({ _id, name, formTools }: { _id: string; name: string; formTools: UseFormReturn<UserDataForm> }) {
	return (
		<form
			action={async () => {
				formTools.handleSubmit(async (data: UserDataForm) => {
					try {
						const result = await updateProfile(_id, JSON.stringify(data));
						result ? alert("Cập nhật hồ sơ thành công") : console.log("Cập nhật hồ sơ thất bại");
					} catch (error) {
						console.log(error);
					}
				})();
			}}
			className='flex flex-col h-dvh'
		>
			<div className='overflow-y-scroll p-2'>
				<FormProvider {...formTools}>
					{name === "Personal" && <Personal Wrapper={Wrapper} Input={editInput} Avatar={editAvatar} hideField={{ fileName: true }} />}
					{name === "Goal" && <Goal Wrapper={Wrapper} Area={editArea} />}
					{name === "Experience" && <Experience Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{name === "Project" && <Project Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{name === "Education" && <Education Wrapper={Wrapper} Input={editInput} />}
					{name === "Skill" && <Skill Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{name === "Badge" && <Badge Wrapper={Wrapper} Input={editInput} />}
					{name === "Certificate" && <Certificate Wrapper={Wrapper} Input={editInput} />}
					{name === "Reference" && <Reference Wrapper={Wrapper} Input={editInput} />}
					{name === "Activity" && <Activity Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{name === "Hobby" && <Hobby Wrapper={Wrapper} Input={editInput} />}
					{name === "Other" && <Other Wrapper={Wrapper} Area={editArea} />}
				</FormProvider>
			</div>
			<div className='flex justify-end pb-16 pt-2 pr-2 border-t-[1px] border-slate-200'>
				<GreenSubmit />
			</div>
		</form>
	);
}
