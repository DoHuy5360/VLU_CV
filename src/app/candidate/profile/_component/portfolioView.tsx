import { FormProvider, UseFormReturn } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import Activity from "@/components/cvEditFields/editFields/activity";
import { Wrapper } from "./wrapper";
import updateProfile from "@/actions/candidate/updateProfile";
import Goal from "@/components/cvEditFields/editFields/goal";
import editArea from "./editArea";
import editInput from "./editInput";
import Project from "@/components/cvEditFields/editFields/project";
import Skill from "@/components/cvEditFields/editFields/skill";
import editAvatar from "./editAvatar";
import GreenSubmit from "@/components/button/greenSubmit";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import Experience from "@/components/portfolioEditFields.tsx/editFields/experience";
import EditExperienceImage from "./editExperienceImage";
import Personal from "@/components/portfolioEditFields.tsx/editFields/personal";
import EditPortfolioAvatar from "./editPortfolioAvatar";
import About from "@/components/portfolioEditFields.tsx/editFields/about";
import EditAboutImage from "./editAboutImage";
import Social from "@/components/portfolioEditFields.tsx/editFields/social";

export default function PortfolioView({ _id, name, formTools }: { _id: string; name: string; formTools: UseFormReturn<PortfolioFormData> }) {
	return (
		<form
			action={async () => {
				formTools.handleSubmit(async (data: PortfolioFormData) => {
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
					{name === "Experience" && <Experience Wrapper={Wrapper} Input={editInput} Area={editArea} Image={EditExperienceImage} />}
					{name === "Personal" && <Personal Wrapper={Wrapper} Input={editInput} Avatar={EditPortfolioAvatar} hideField={{ fileName: true }} />}
					{name === "About" && <About Wrapper={Wrapper} Area={editArea} Image={EditAboutImage} />}
					{name === "Project" && <Project Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{name === "Skill" && <Skill Wrapper={Wrapper} Input={editInput} Area={editArea} />}
					{name === "Social" && <Social Wrapper={Wrapper} Input={editInput} />}
				</FormProvider>
			</div>
			<div className='flex justify-end pb-16 pt-2 pr-2 border-t-[1px] border-slate-200'>
				<GreenSubmit />
			</div>
		</form>
	);
}
