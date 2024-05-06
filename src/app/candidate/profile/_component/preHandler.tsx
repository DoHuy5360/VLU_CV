"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileDataSchema } from "@/validation/userData";
import { createContext } from "react";
import Tab from "./tab";
import View from "./view";
import { UserData } from "@/types/userData";

export const ProfileTabContext = createContext<{ setCurrentTab: Dispatch<SetStateAction<string | null>>; toggle: string }>({
	setCurrentTab: () => {},
	toggle: "",
});

export default function PreHandler({ data }: { data: UserData }) {
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		setCurrentTab(JSON.parse(savedState as string));
	}, []);

	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userProfileDataSchema),
		defaultValues: data,
	});

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
}