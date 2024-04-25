"use client";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

import Tab from "./_component/tab";
import View from "./_component/view";
import { CvContext } from "@/contexts/cvProvider";
import { useForm } from "react-hook-form";
import { UserDataForm } from "@/app/template/cv/[name]/_component/editCvForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDataSchema } from "@/validation/userData";
import { init } from "@/app/template/cv/[name]/page";
import { createContext } from "react";

export const ProfileTabContext = createContext<{ setCurrentTab: Dispatch<SetStateAction<string | null>>; toggle: string }>({
	setCurrentTab: () => {},
	toggle: "",
});

export default () => {
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		setCurrentTab(JSON.parse(savedState as string));
	}, []);
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
	if (currentTab === null) return <div>Loading...</div>;

	return (
		<div className='grid grid-cols-[150px_auto] h-full'>
			<div className='border-r-[1px] border-slate-200 h-full'>
				<ProfileTabContext.Provider
					value={{
						setCurrentTab,
						toggle: currentTab,
					}}
				>
					<Tab name='Personal' isError={formTools.formState.errors.attrs?.head} />
					<Tab name='Goal' isError={formTools.formState.errors.attrs?.goal} />
					<Tab name='Education' isError={formTools.formState.errors.attrs?.education} />
					<Tab name='Skill' isError={formTools.formState.errors.attrs?.skill} />
					<Tab name='Experience' isError={formTools.formState.errors.attrs?.experience} />
					<Tab name='Project' isError={formTools.formState.errors.attrs?.project} />
					<Tab name='Certificate' isError={formTools.formState.errors.attrs?.certificate} />
					<Tab name='Badge' isError={formTools.formState.errors.attrs?.badge} />
					<Tab name='Activity' isError={formTools.formState.errors.attrs?.activity} />
					<Tab name='Reference' isError={formTools.formState.errors.attrs?.reference} />
					<Tab name='Hobby' isError={formTools.formState.errors.attrs?.hobby} />
					<Tab name='Other' isError={formTools.formState.errors.attrs?.other} />
				</ProfileTabContext.Provider>
			</div>
			<View name={currentTab} formTools={formTools} />
		</div>
	);
};
