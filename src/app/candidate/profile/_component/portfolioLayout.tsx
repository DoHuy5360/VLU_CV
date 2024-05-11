"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Tab from "./tab";
import { PortfolioFormData, portfolioData } from "@/entities/getDataPortfolio";
import PortfolioView from "./portfolioView";
import { ProfileTabContext } from "./preHandler";

export default function PortfolioLayout({ objectData }: { objectData: string }) {
	const data = useRef(JSON.parse(objectData));
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		setCurrentTab(JSON.parse(savedState as string));
	}, []);

	const formTools = useForm<PortfolioFormData>({
		resolver: zodResolver(portfolioData),
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
						<Tab title='Thông tin' name='Personal' isError={formTools.formState.errors.personal} />
						<Tab title='Giới thiệu' name='About' isError={formTools.formState.errors.about} />
						<Tab title='Kinh nghiệm' name='Experience' isError={formTools.formState.errors.experiences} />
						<Tab title='Dự án' name='Project' isError={formTools.formState.errors.projects} />
						<Tab title='Kỹ năng' name='Skill' isError={formTools.formState.errors.skills} />
						<Tab title='Mạng lưới' name='Social' isError={formTools.formState.errors.socials} />
					</ProfileTabContext.Provider>
				</div>
				<PortfolioView _id={data.current._id} name={currentTab} formTools={formTools} />
			</div>
		</div>
	);
}
