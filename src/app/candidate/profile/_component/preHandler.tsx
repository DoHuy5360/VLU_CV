"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileDataSchema } from "@/validation/userData";
import { createContext } from "react";
import Tab from "./tab";
import View from "./view";

export const ProfileTabContext = createContext<{ setCurrentTab: Dispatch<SetStateAction<string | null>>; toggle: string }>({
	setCurrentTab: () => {},
	toggle: "",
});

export default function PreHandler({ objectData }: { objectData: string }) {
	const data = useRef(JSON.parse(objectData));
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		setCurrentTab(JSON.parse(savedState as string));
	}, []);

	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userProfileDataSchema),
		defaultValues: data.current.data,
	});
	useEffect(() => {
		if (currentTab === null) setCurrentTab("Personal");
	}, []);
	if (currentTab === null) return <div>Loading...</div>;

	return (
		<div className='flex flex-col'>
			<div className='px-2 py-1 w-full flex items-center gap-1 border-b-[1px]'>
				<div>Bạn đang xem hồ sơ:</div>
				<div className='font-bold'>{data.current.name}</div>
			</div>
			<div className='grid grid-cols-[150px_auto] h-full w-full'>
				<div className='border-r-[1px] border-slate-200 h-full'>
					<ProfileTabContext.Provider
						value={{
							setCurrentTab,
							toggle: currentTab,
						}}
					>
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
					</ProfileTabContext.Provider>
				</div>
				<View _id={data.current._id} name={currentTab} formTools={formTools} />
			</div>
		</div>
	);
}
