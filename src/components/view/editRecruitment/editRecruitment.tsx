"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";
import { createContext } from "react";
import { z } from "zod";
import RecruitmentRenderer from "./_component/recruitmentRenderer";
import { addDate, dateParser } from "@/utils/dateHandler";

const recruitmentSchema = z
	.object({
		title: z.string().min(1, "Hãy nhập tiêu đề."),
		position: z.string().min(1, "Hãy nhập vị trí tuyển dụng."),
		description: z.string().min(1, "Hãy nhập mô tả công việc."),
		responsibility: z.string().min(1, "Hãy liệt kê trách nhiệm của ứng viên."),
		requirement: z.string().min(1, "Hãy liệt kê các yêu cầu đối với ứng viên."),
		benefit: z.string().min(1, "Hãy liệt kê các phúc lợi."),
		address: z.string().min(1, "Hãy nhập địa chỉ làm việc."),
		experience: z.object({
			title: z.string(),
			year: z.number().min(0, "Hãy chọn số năm kinh nghiệm yêu cầu."),
		}),
		schedule: z.string().min(1, "Hãy nhập lịch làm việc."),
		salary: z.string().min(1, "Hãy nhập mức lương cho vị trí này."),
		isHide: z.boolean(),
		isClose: z.boolean(),
		startAt: z.string().min(1, "Hãy chọn ngày mở đơn tuyển dụng."),
		closeAt: z.string().min(1, "Hãy chọn ngày đóng đơn tuyển dụng."),
	})
	.refine(
		(schema) => {
			const startDate = dateParser(schema.startAt);
			const closeDate = dateParser(schema.closeAt);

			// Tính số mili giây giữa hai ngày
			let diff = closeDate.getTime() - startDate.getTime();

			// Chuyển đổi số mili giây thành số ngày
			let diffDays = diff / (1000 * 3600 * 24);

			return diffDays >= 3 && diffDays < 28;
		},
		{ message: "Thời hạn phải lớn hơn 3 ngày và không quá 28 ngày.", path: ["closeAt"] }
	);

export type RecruitmentDataForm = z.infer<typeof recruitmentSchema>;

const yearExps = [
	{
		title: "Không yêu cầu kinh nghiệm.",
		value: 0,
	},
	{
		title: "Từ 1 năm kinh nghiệm trở lên.",
		value: 1,
	},
	{
		title: "Từ 2 năm kinh nghiệm trở lên.",
		value: 2,
	},
	{
		title: "Từ 3 năm kinh nghiệm trở lên.",
		value: 3,
	},
	{
		title: "Từ 4 năm kinh nghiệm trở lên.",
		value: 4,
	},
	{
		title: "Từ 5 năm kinh nghiệm trở lên.",
		value: 5,
	},
	{
		title: "Từ 10 năm kinh nghiệm trở lên.",
		value: 10,
	},
];

export const RecruitmentFormContext = createContext<RecruitmentDataForm | null>(null);
export default function EditRecruitment({
	recruitmentObjectData,
	handleSubmit,
	hiddenField,
}: {
	recruitmentObjectData: RecruitmentDataForm;
	handleSubmit: SubmitHandler<RecruitmentDataForm>;
	hiddenField?: {
		startAt: boolean;
	};
}) {
	const formTools = useForm<RecruitmentDataForm>({
		resolver: zodResolver(recruitmentSchema),
		defaultValues: recruitmentObjectData,
	});
	const [closeDateRange, setCloseDateRange] = useState({
		minCloseDate: addDate(formTools.getValues("startAt"), 3),
		maxCloseDate: addDate(formTools.getValues("startAt"), 28 - 3),
	});
	const [isShowListExps, setShowListExps] = useState(false);
	const [yearExpRequired, setYearExpRequired] = useState("Không yêu cầu kinh nghiệm");
	const isHide = formTools.getValues("isHide");
	return (
		<div className='flex flex-grow h-[inherit] overflow-hidden'>
			<form
				action={() => {
					formTools.handleSubmit(handleSubmit)();
				}}
				className='w-2/3 h-[inherit] overflow-y-scroll flex flex-col gap-2 px-2 pt-2 pb-20 rounded-sm border-r-[1px] border-slate-200'
			>
				<div className='flex flex-col gap-2'>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='title'>
							Tiêu đề
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input {...formTools.register("title")} className='p-1 border-[1px] w-full' type='text' id='title' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.title?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='position'>
							Vị trí tuyển
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input {...formTools.register("position")} className='p-1 border-[1px] w-full' type='text' id='position' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.position?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='description'>
							Mô tả công việc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...formTools.register("description")} className='h-36 p-1 border-[1px] resize-none w-full' id='description' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.description?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='responsibility'>
							Trách nhiệm
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...formTools.register("responsibility")} className='h-36 p-1 border-[1px] resize-none w-full' id='responsibility' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.responsibility?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='requirement'>
							Yêu cầu
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...formTools.register("requirement")} className='h-36 p-1 border-[1px] resize-none w-full' id='requirement' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.requirement?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='benefit'>
							Phúc lợi
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...formTools.register("benefit")} className='h-36 p-1 border-[1px] resize-none w-full' id='benefit' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.benefit?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='schedule'>
							Lịch làm việc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input {...formTools.register("schedule")} className='p-1 border-[1px] w-full' type='text' id='schedule' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.schedule?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='address'>
							Địa chỉ
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...formTools.register("address")} className='h-36 p-1 border-[1px] resize-none w-full' id='address' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.address?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='experience'>
							Kinh nghiệm
						</label>
						<div className='flex flex-col'>
							<button
								id='experience'
								onClick={() => {
									setShowListExps((pre) => !pre);
								}}
								className='flex w-fit p-1 items-center gap-2 border-[1px]'
								type='button'
							>
								<div>{yearExpRequired}</div>
								<IoMdArrowDropdown />
							</button>
							<div className={`${!isShowListExps && "hidden"} flex flex-col border-[1px] translate-y-[-1px] w-fit`}>
								{yearExps.map((e, i) => (
									<div
										key={i}
										onClick={() => {
											formTools.setValue("experience", {
												year: e.value,
												title: e.title,
											});
											setYearExpRequired(e.title);
											setShowListExps(false);
										}}
										className='hover:bg-slate-200 p-1 cursor-pointer'
									>
										{e.title}
									</div>
								))}
							</div>
							<div className='text-xs text-red-500'>{formTools.formState.errors.experience?.message}</div>
						</div>
					</div>
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='salary'>
							Mức lương
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input {...formTools.register("salary")} className='border-[1px] p-1 w-full' type='text' id='salary' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.salary?.message}</div>
						</div>
					</div>
					{!hiddenField?.startAt && (
						<div className='flex flex-col align-top text-sm w-full'>
							<label className='font-bold whitespace-nowrap' htmlFor='startAt'>
								Đăng tuyển lúc
							</label>
							<div className='flex flex-col gap-1 w-full'>
								<input
									{...formTools.register("startAt")}
									className='border-[1px]'
									type='date'
									id='startAt'
									min={formTools.getValues("startAt")}
									onChange={(e) => {
										setCloseDateRange({
											minCloseDate: addDate(e.target.value, 3),
											maxCloseDate: addDate(e.target.value, 28 - 3),
										});
										formTools.setValue("closeAt", "");
									}}
								/>
								<div className='text-xs text-red-500'>{formTools.formState.errors.startAt?.message}</div>
							</div>
						</div>
					)}
					<div className='flex flex-col align-top text-sm w-full'>
						<label className='font-bold whitespace-nowrap' htmlFor='closeAt'>
							Hết hạn lúc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input min={closeDateRange.minCloseDate} max={closeDateRange.maxCloseDate} {...formTools.register("closeAt")} className='border-[1px]' type='date' id='closeAt' />
							<div className='text-xs text-red-500'>{formTools.formState.errors.closeAt?.message}</div>
						</div>
					</div>

					<div className='flex align-top gap-2 text-sm'>
						<div className='py-1'>Trạng thái</div>
						<div className='flex flex-col gap-1'>
							<div className='flex gap-2 items-center'>
								<button
									onClick={() => {
										formTools.setValue("isHide", false);
										formTools.trigger("isHide");
									}}
									className={`${!isHide && "bg-orange-400"} border-[1px] p-1`}
									type='button'
								>
									Hiển thị
								</button>
								<button
									onClick={() => {
										formTools.setValue("isHide", true);
										formTools.trigger("isHide");
									}}
									className={`${isHide && "bg-orange-400"} border-[1px] p-1`}
									type='button'
								>
									Tạm ẩn
								</button>
							</div>
							<div className='text-xs text-red-500'>{formTools.formState.errors.isHide?.message}</div>
						</div>
					</div>
				</div>
				<button className='p-2 rounded-sm text-sm bg-green-300' type='submit'>
					Lưu
				</button>
			</form>
			<RecruitmentFormContext.Provider value={formTools.watch()}>
				<RecruitmentRenderer />
			</RecruitmentFormContext.Provider>
		</div>
	);
}
