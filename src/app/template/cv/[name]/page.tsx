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

export const init = getUserDataCV({});

export const FormValuesContext = createContext<UserDataForm>(init);

function EditTemplate({ params }: { params: { name: string } }) {
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

	return (
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
					<FormValuesContext.Provider value={formTools.watch()}>
						<CvRenderer cvName={params.name} />
					</FormValuesContext.Provider>
				</div>
			</div>
		</div>
	);
}

export default EditTemplate;
