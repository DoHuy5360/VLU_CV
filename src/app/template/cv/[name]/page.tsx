"use client";

import CvRenderer from "./_component/cvRenderer";
import EditCvForm, { UserDataForm } from "./_component/editCvForm";
import CvSuggestion from "./_component/cvSuggestion";
import { createContext, useContext, useEffect } from "react";
import { CvContext } from "@/contexts/cvProvider";
import { FormProvider, useForm } from "react-hook-form";
import { userDataSchema } from "@/validation/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUserDataCV } from "@/entities/userDataCV";

export const FormValuesContext = createContext<UserDataForm>(
	getUserDataCV({})
);

function EditTemplate({ params }: { params: { name: string } }) {
	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userDataSchema),
		defaultValues: getUserDataCV({}),
	});
	useEffect(() => {
		async function getDataCV() {
			const data = await fetch(`http://localhost:3000/api/cv`);
			formTools.reset(await data.json());
		}
		getDataCV();
	}, []);

	return (
		<FormValuesContext.Provider value={formTools.watch()}>
			<div className='flex h-full'>
				<FormProvider {...formTools}>
					<EditCvForm
						cvName={params.name}
						handleSubmit={formTools.handleSubmit}
					/>
				</FormProvider>
				<div className='flex flex-col w-full'>
					<CvSuggestion />
					<div className='overflow-y-scroll pb-16'>
						<CvRenderer cvName={params.name} />
					</div>
				</div>
			</div>
		</FormValuesContext.Provider>
	);
}

export default EditTemplate;
