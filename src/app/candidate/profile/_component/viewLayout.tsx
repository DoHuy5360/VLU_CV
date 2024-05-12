"use client";
import { FieldValues, FormProvider, UseFormReturn, useForm } from "react-hook-form";
import updateProfile from "@/actions/candidate/updateProfile";
import GreenSubmit from "@/components/button/greenSubmit";
import { PortfolioFormData } from "@/entities/getDataPortfolio";

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
			<div className='px-2 py-1 w-full basis-1/12 flex-grow-0 flex items-center gap-1 border-b-[1px]'>
				<div>Bạn đang xem hồ sơ:</div>
				<div className='font-bold'>{objectData.name}</div>
			</div>
			<div className='flex flex-grow-1 basis-11/12 w-full overflow-y-hidden'>
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
					className='flex flex-col flex-grow-0 basis-4/5 overflow-y-scroll relative'
				>
					<div className='flex-grow p-2'>
						<FormProvider {...formTools}>{views}</FormProvider>
					</div>
					<div className='flex justify-end p-2 bg-white border-t-[1px] border-slate-200 sticky bottom-0'>
						<GreenSubmit />
					</div>
				</form>
			</div>
		</div>
	);
}
