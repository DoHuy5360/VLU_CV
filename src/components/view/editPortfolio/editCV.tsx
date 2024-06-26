"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { createContext, useEffect, useState } from "react";
import CvRenderer from "./_component/cvRenderer";
import Image from "next/image";
import { CvSchemaType } from "@/models/cv";
import { Buttons } from "@/components/button/buttons";
import { PortfolioFormData, getDataPortfolio, portfolioSchemaRequireFull } from "@/entities/getDataPortfolio";
import EditCvForm from "./_component/editCvForm";
import DialogProfileSelection from "./dialogProfileSelection";
import { CandidateProfileProps } from "@/app/template/portfolio/[name]/_component/preHandler";

export const init = getDataPortfolio();

export const FormValuesContext = createContext<PortfolioFormData>(init);

export default function EditCvView({
	cvObjectData,
	cvTemplateName,
	listProfiles,
	onSubmit,
}: {
	cvObjectData: PortfolioFormData;
	cvTemplateName: string;
	listProfiles: CandidateProfileProps[];
	onSubmit: SubmitHandler<PortfolioFormData>;
}) {
	const formTools = useForm<PortfolioFormData>({
		resolver: zodResolver(portfolioSchemaRequireFull),
		defaultValues: cvObjectData,
	});

	const [isShowSetting, setShowSetting] = useState(false);
	const currentTemplate = formTools.getValues("template");
	const [substituteTemplates, setSubstituteTemplates] = useState<CvSchemaType[]>([]);
	const [isShowOtherTemplates, setShowOtherTemplates] = useState(false);
	const handleGetTemplate = async () => {
		setShowSetting(false);
		if (substituteTemplates.length === 0) {
			const res = await fetch("/api/portfolio");
			setSubstituteTemplates(await res.json());
		}
		setShowOtherTemplates(true);
	};
	const [currentProfileIndex, setCurrentProfileIndex] = useState<number | null>(null);

	useEffect(() => {
		if (currentProfileIndex !== null && listProfiles !== undefined) {
			listProfiles[currentProfileIndex].data.template = formTools.getValues("template");
			formTools.reset(listProfiles[currentProfileIndex].data);
		}
	}, [currentProfileIndex, listProfiles, formTools]);

	const [isShowChangeProfileDialog, setShowChangeProfileDialog] = useState(false);
	return (
		<div className='flex h-full'>
			<DialogProfileSelection
				listProfiles={listProfiles}
				setCurrentProfileIndex={setCurrentProfileIndex}
				isShowChangeProfileDialog={isShowChangeProfileDialog}
				setShowChangeProfileDialog={setShowChangeProfileDialog}
			/>
			<FormProvider {...formTools}>
				<EditCvForm onSubmit={onSubmit} />
			</FormProvider>
			<div className='flex flex-col basis-2/3 flex-grow-1 w-full h-full'>
				<div className='flex items-top justify-end gap-2 border-b-[1px] pr-2'>
					{/* <FormValuesContext.Provider value={formTools.watch()}>
						<CvSuggestion />
					</FormValuesContext.Provider> */}
					<div className='relative p-2'>
						<div
							onClick={() => {
								setShowSetting((pre) => !pre);
							}}
						>
							<Buttons.Setting.Click.Icon />
						</div>
						<div className='absolute z-10 translate-x-[-100%] translate-y-[-50%] bg-white border-[1px] flex flex-col text-sm'>
							<div onClick={handleGetTemplate} className={`${!isShowSetting && "hidden"} hover:bg-slate-200 px-3 py-1 whitespace-nowrap cursor-pointer`}>
								Đổi mẫu Portfolio
							</div>
							{listProfiles.length > 1 && (
								<div
									onClick={() => {
										setShowChangeProfileDialog(true);
										setShowSetting(false);
									}}
									className={`${!isShowSetting && "hidden"} hover:bg-slate-200 px-3 py-1 whitespace-nowrap cursor-pointer`}
								>
									Đổi hồ sơ
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='flex overflow-y-hidden'>
					<div className='flex-grow overflow-y-scroll scroll-smooth'>
						<FormValuesContext.Provider value={formTools.watch()}>
							<CvRenderer
								cvTemplateName={listProfiles.length > 1 ? (formTools.getValues("template") === "Root" ? cvTemplateName : formTools.getValues("template")) : formTools.getValues("template")}
							/>
						</FormValuesContext.Provider>
					</div>
					{isShowOtherTemplates && (
						<div className={`${!isShowOtherTemplates && "hidden"} flex flex-col border-l-[1px]`}>
							<div className='flex justify-between items-center border-b-[1px]'>
								<div className='flex flex-col gap-1 p-2 text-xs'>
									<div>Mẫu đang dùng</div>
									<div className='font-bold'>{currentTemplate}</div>
								</div>
								<div
									onClick={() => {
										setShowOtherTemplates(false);
									}}
									className='pr-2'
								>
									<Buttons.Delete.Click.Icon />
								</div>
							</div>
							<div className='flex flex-col p-2 gap-2 overflow-y-scroll'>
								{substituteTemplates.map((cv, i) => {
									return (
										<div
											key={i}
											onClick={() => {
												formTools.setValue("template", cv.name);
												formTools.trigger("template");
											}}
											className={`${
												currentTemplate === cv.name && "border-orange-500"
											} flex flex-col items-center w-32 cursor-pointer border-[1px] hover:outline-1 outline-0 outline outline-slate-300`}
										>
											<div className='p-2'>
												<Image src={cv.thumbnail} className='border-[1px]' width={100} height={200} alt={cv.name} />
											</div>
											<div className='text-xs py-2 border-t-[1px] w-full text-center'>{cv.name}</div>
										</div>
									);
								})}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
