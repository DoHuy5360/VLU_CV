"use client";
import EditCvForm, { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { getUserDataCV } from "@/entities/userDataCV";
import { userDataSchema } from "@/validation/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { createContext } from "react";
import CvSuggestion from "./_component/cvSuggestion";
import CvRenderer from "./_component/cvRenderer";
import { useEffect } from "react";

export const init = getUserDataCV({});

export const FormValuesContext = createContext<UserDataForm>(init);

export default function EditCvView({ cvObjectData, cvTemplateName, onSubmit }: { cvObjectData: UserDataForm; cvTemplateName: string; onSubmit: SubmitHandler<UserDataForm> }) {
	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userDataSchema),
		defaultValues: init,
	});
	useEffect(() => {
		if (cvObjectData !== null) {
			formTools.reset(cvObjectData);
		}
	}, [cvObjectData]);

	return (
		<div className='flex h-full'>
			<FormProvider {...formTools}>
				<EditCvForm onSubmit={onSubmit} />
			</FormProvider>
			<div className='flex flex-col w-full'>
				<CvSuggestion />
				<div className='overflow-y-scroll h-dvh pb-24'>
					<FormValuesContext.Provider value={formTools.watch()}>
						<CvRenderer cvName={cvTemplateName} />
					</FormValuesContext.Provider>
				</div>
			</div>
		</div>
	);
}
