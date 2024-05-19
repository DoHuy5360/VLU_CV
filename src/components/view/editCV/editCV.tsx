"use client";
import EditCvForm, { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { getUserDataCV } from "@/entities/userDataCV";
import { userDataSchema } from "@/validation/userData";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { createContext, useEffect, useState } from "react";
import CvSuggestion from "./_component/cvSuggestion";
import CvRenderer from "./_component/cvRenderer";
import { BiCog } from "react-icons/bi";
import Image from "next/image";
import { CvSchemaType } from "@/models/cv";
import { CandidateProfileProps } from "@/app/template/cv/[name]/_component/preHandler";
import DialogProfileSelection from "./dialogProfileSelection";
import { GrClose } from "react-icons/gr";

export const init = getUserDataCV({});

export const FormValuesContext = createContext<UserDataForm>(init);

export default function EditCvView({
	cvObjectData,
	cvTemplateName,
	listProfiles,
	onSubmit,
}: {
	cvObjectData: UserDataForm;
	listProfiles: CandidateProfileProps[];
	cvTemplateName: string;
	onSubmit: SubmitHandler<UserDataForm>;
}) {
	const formTools = useForm<UserDataForm>({
		resolver: zodResolver(userDataSchema),
		defaultValues: cvObjectData,
	});

	const [isShowSetting, setShowSetting] = useState(false);
	const currentTemplate = formTools.getValues("template");
	const [substituteTemplates, setSubstituteTemplates] = useState<CvSchemaType[]>([]);
	const [isShowOtherTemplates, setShowOtherTemplates] = useState(false);
	const handleGetTemplate = async () => {
		setShowSetting(false);
		if (substituteTemplates.length === 0) {
			const res = await fetch("/api/cv");
			setSubstituteTemplates(await res.json());
		}
		setShowOtherTemplates(true);
	};
	const [currentProfileIndex, setCurrentProfileIndex] = useState<number | null>(null);

	useEffect(() => {
		if (currentProfileIndex !== null && listProfiles !== undefined) {
			formTools.reset(listProfiles[currentProfileIndex].data);
		}
	}, [currentProfileIndex, listProfiles]);

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
				<div className='flex items-top gap-2 border-b-[1px] pr-2'>
					<FormValuesContext.Provider value={formTools.watch()}>
						<CvSuggestion />
					</FormValuesContext.Provider>
					<div className='relative py-2'>
						<div
							onClick={() => {
								setShowSetting((pre) => !pre);
							}}
							className='p-2 cursor-pointer hover:bg-slate-200 active:bg-orange-400'
						>
							<BiCog />
						</div>
						<div className='absolute translate-x-[-100%] translate-y-[-50%] bg-white border-[1px] flex flex-col text-sm'>
							<div onClick={handleGetTemplate} className={`${!isShowSetting && "hidden"} hover:bg-slate-200 px-3 py-1 whitespace-nowrap cursor-pointer`}>
								Đổi mẫu CV
							</div>
							{listProfiles.length > 0 && (
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
					<div className='flex-grow overflow-y-scroll pb-24'>
						<FormValuesContext.Provider value={formTools.watch()}>
							<CvRenderer cvTemplateName={cvTemplateName} />
						</FormValuesContext.Provider>
					</div>
					{isShowOtherTemplates && (
						<div className={`${!isShowOtherTemplates && "hidden"} flex flex-col border-l-[1px]`}>
							<div className='flex justify-between items-center'>
								<div className='flex flex-col gap-1 p-2 text-xs border-b-[1px]'>
									<div>Mẫu đang dùng</div>
									<div className='font-bold'>{currentTemplate}</div>
								</div>
								<div
									onClick={() => {
										setShowOtherTemplates(false);
									}}
									className='p-2 mr-2 cursor-pointer hover:bg-slate-200 active:bg-slate-300'
								>
									<GrClose />
								</div>
							</div>
							<div className='flex flex-col p-2 gap-1'>
								{substituteTemplates.map((cv, i) => {
									return (
										<div
											key={i}
											onClick={() => {
												formTools.setValue("template", cv.name);
												formTools.trigger();
											}}
											className={`${
												currentTemplate === cv.name && "border-orange-500"
											} flex flex-col items-center w-32 cursor-pointer border-[1px] hover:outline-1 outline-0 outline outline-slate-300`}
										>
											<Image src={cv.thumbnail} className='py-2' width={100} height={200} alt={cv.name} />
											<div>{cv.name}</div>
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
