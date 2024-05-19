"use client";
import { FieldValues, FormProvider, UseFormReturn, useForm } from "react-hook-form";
import updateProfile from "@/actions/candidate/updateProfile";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { Buttons } from "@/components/button/buttons";

export type CandidateProfileProp = {
	_id: string;
	name: string;
	data: PortfolioFormData;
	type: string;
};

export default function ViewLayout<T extends FieldValues>({
	tabs,
	views,
	objectData,
	formTools,
}: {
	tabs: JSX.Element;
	views: JSX.Element;
	objectData: CandidateProfileProp;
	formTools: UseFormReturn<T>;
}) {
	return (
		<div className='flex flex-col relative h-full'>
			<div className='px-2 py-1 w-full flex-grow-0 flex items-center gap-1 border-b-[1px]'>
				<div>Bạn đang xem hồ sơ:</div>
				<div className='font-bold'>{objectData.name}</div>
			</div>
			<div className='flex flex-grow w-full overflow-y-hidden'>
				<div className='flex-grow-0 basis-1/5 border-r-[1px] border-slate-200'>{tabs}</div>
				<form
					action={async () => {
						formTools.handleSubmit(async (dataForm: T) => {
							try {
								const result = await updateProfile(objectData._id, JSON.stringify(dataForm));
								result ? alert("Cập nhật hồ sơ thành công") : console.log("Cập nhật hồ sơ thất bại");
							} catch (error) {
								console.log(error);
							}
						})();
					}}
					className='flex flex-col h-full flex-grow basis-4/5 relative'
				>
					<FormProvider {...formTools}>{views}</FormProvider>
					<div className='flex justify-end p-2 bg-white border-t-[1px] border-slate-200 sticky bottom-0'>
						<Buttons.Submit.Save />
					</div>
				</form>
			</div>
		</div>
	);
}
