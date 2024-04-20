import { CvContext } from "@/contexts/cvProvider";
import { useContext, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { UserDataForm } from "@/app/template/cv/[name]/_component/editCvForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDataSchema } from "@/validation/userData";
import { init } from "@/app/template/cv/[name]/page";
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

export default ({ name }: { name: string }) => {
	const { state } = useContext(CvContext);

	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userDataSchema),
		defaultValues: init,
	});
	useEffect(() => {
		if (state !== null) {
			formTools.reset(state);
		}
	}, [state]);

	if (state === null) return <div>Loading...</div>;
	const UpdateProfilePreValidation = (data: UserDataForm) => {
		console.log(data);
	};
	return (
		<form
			action={async () => {
				formTools.handleSubmit(async (data: UserDataForm) => {
					UpdateProfilePreValidation(data);
					try {
						userDataSchema.parse(data);
						const result = await updateProfile(JSON.stringify(data));
						result ? alert("Done") : console.log("Update fail");
					} catch (error) {
						console.log(error);
					}
				})();
			}}
			className='flex flex-col h-dvh'
		>
			<div className='overflow-y-scroll p-2'>
				<FormProvider {...formTools}>
					{name === "Personal" && <Personal Wrapper={Wrapper} Input={editInput} />}
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
			<div className='flex justify-end pb-14 pt-2 pr-2 border-t-[1px] border-slate-200'>
				<button className='bg-green-300 px-4 py-2 rounded-full text-sm ' type='submit'>
					Save
				</button>
			</div>
			{/* <Save data={state} /> */}
		</form>
	);
};
