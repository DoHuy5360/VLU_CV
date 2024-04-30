"use client";

import { createRecruitment } from "@/actions/recruiter/createRecruitment";
import experience from "@/components/cv/v01A/experience";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdArrowDropdown } from "react-icons/io";
import { z } from "zod";

const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

function dateParser(YYYYMMDD: string) {
	const dateParse = dateRegex.exec(YYYYMMDD);

	let date = new Date(parseInt(dateParse?.groups?.year as string), parseInt(dateParse?.groups?.month as string), parseInt(dateParse?.groups?.day as string));
	return date;
}

function formatDayMonth(day: number | string, month: number | string) {
	// Chuyển đổi tháng và ngày thành chuỗi, nếu là số có một chữ số thì thêm số 0 phía trước
	month = (month as number) < 10 ? "0" + month : month;
	day = (day as number) < 10 ? "0" + day : day;
	return {
		day,
		month,
	};
}

function getCurrentDate() {
	let date = new Date(); // Tạo một đối tượng Date mới, mặc định sẽ là ngày và giờ hiện tại
	let year = date.getFullYear(); // Lấy năm
	let month: number | string = date.getMonth() + 1; // Lấy tháng (tháng trong JavaScript bắt đầu từ 0, nên ta cần cộng thêm 1)
	let day: number | string = date.getDate(); // Lấy ngày

	const f = formatDayMonth(day, month);

	return `${year}-${f.month}-${f.day}`; // Kết hợp lại để tạo ra chuỗi
}

function addDate(YYYYMMDD: string, plusDate: number) {
	const date = dateParser(YYYYMMDD);
	const temp = dateParser(YYYYMMDD);
	temp.setDate(date.getDate() + plusDate);

	let year = temp.getFullYear();
	let month = temp.getMonth();
	let day = temp.getDate();
	if (date.getMonth() < temp.getMonth()) {
		day = temp.getDate() + 1;
	}

	const f = formatDayMonth(day, month);

	return `${year}-${f.month}-${f.day}`; // Kết hợp lại để tạo ra chuỗi
}

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

export default () => {
	const {
		register,
		handleSubmit,
		trigger,
		setValue,
		getValues,
		formState: { errors },
	} = useForm<RecruitmentDataForm>({
		resolver: zodResolver(recruitmentSchema),
		defaultValues: {
			title: "",
			position: "",
			description: "",
			responsibility: "",
			requirement: "",
			benefit: "",
			address: "",
			experience: {
				year: 0,
				title: "Không yêu cầu kinh nghiệm.",
			},
			schedule: "",
			salary: "",
			isHide: false,
			startAt: getCurrentDate(),
			closeAt: "",
		},
	});
	const [closeDateRange, setCloseDateRange] = useState({
		minCloseDate: addDate(getValues("startAt"), 3),
		maxCloseDate: addDate(getValues("startAt"), 28 - 3),
	});
	const [isShowListExps, setShowListExps] = useState(false);
	const [yearExpRequired, setYearExpRequired] = useState("Không yêu cầu kinh nghiệm");
	const isHide = getValues("isHide");
	return (
		<div className='grid place-items-center h-dvh'>
			<form
				action={() => {
					handleSubmit(async (data: RecruitmentDataForm) => {
						console.log(data);
						const isSuccess = await createRecruitment(data);
						isSuccess ? alert("Tạo thành công") : alert("Tạo thất bại");
					})();
				}}
				className='w-1/2 flex flex-col gap-2 p-2 rounded-sm border-[1px] border-slate-200'
			>
				<div className='flex flex-col gap-2'>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='title'>
							Tiêu đề
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("title")} className='border-[1px] resize-none w-full' id='description' />
							<div className='text-xs text-red-500'>{errors.title?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='position'>
							Vị trí tuyển
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input {...register("position")} className='border-[1px] w-full' type='text' id='position' />
							<div className='text-xs text-red-500'>{errors.position?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='description'>
							Mô tả công việc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("description")} className='border-[1px] resize-none w-full' id='description' />
							<div className='text-xs text-red-500'>{errors.description?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='responsibility'>
							Trách nhiệm
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("responsibility")} className='border-[1px] resize-none w-full' id='responsibility' />
							<div className='text-xs text-red-500'>{errors.responsibility?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='requirement'>
							Yêu cầu
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("requirement")} className='border-[1px] resize-none w-full' id='requirement' />
							<div className='text-xs text-red-500'>{errors.requirement?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='benefit'>
							Phúc lợi
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("benefit")} className='border-[1px] resize-none w-full' id='benefit' />
							<div className='text-xs text-red-500'>{errors.benefit?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='schedule'>
							Lịch làm việc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("schedule")} className='border-[1px] resize-none w-full' id='schedule' />
							<div className='text-xs text-red-500'>{errors.schedule?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='address'>
							Địa chỉ
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<textarea {...register("address")} className='border-[1px] resize-none w-full' id='address' />
							<div className='text-xs text-red-500'>{errors.address?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm'>
						<label className='whitespace-nowrap py-1' htmlFor='experience'>
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
											setValue("experience", {
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
							<div className='text-xs text-red-500'>{errors.experience?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='salary'>
							Mức lương
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input {...register("salary")} className='border-[1px] w-full' type='text' id='salary' />
							<div className='text-xs text-red-500'>{errors.salary?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='startAt'>
							Đăng tuyển lúc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input
								{...register("startAt")}
								className='border-[1px]'
								type='date'
								id='startAt'
								min={getCurrentDate()}
								onChange={(e) => {
									setCloseDateRange({
										minCloseDate: addDate(e.target.value, 3),
										maxCloseDate: addDate(e.target.value, 28 - 3),
									});
									setValue("closeAt", "");
								}}
							/>
							<div className='text-xs text-red-500'>{errors.startAt?.message}</div>
						</div>
					</div>
					<div className='flex gap-2 align-top text-sm w-full'>
						<label className='whitespace-nowrap' htmlFor='closeAt'>
							Hết hạn lúc
						</label>
						<div className='flex flex-col gap-1 w-full'>
							<input min={closeDateRange.minCloseDate} max={closeDateRange.maxCloseDate} {...register("closeAt")} className='border-[1px]' type='date' id='closeAt' />
							<div className='text-xs text-red-500'>{errors.closeAt?.message}</div>
						</div>
					</div>

					<div className='flex align-top gap-2 text-sm'>
						<div className='py-1'>Trạng thái</div>
						<div className='flex flex-col gap-1'>
							<div className='flex gap-2 items-center'>
								<button
									onClick={() => {
										setValue("isHide", false);
										trigger("isHide");
									}}
									className={`${!isHide && "bg-orange-400"} border-[1px] p-1`}
									type='button'
								>
									Hiển thị
								</button>
								<button
									onClick={() => {
										setValue("isHide", true);
										trigger("isHide");
									}}
									className={`${isHide && "bg-orange-400"} border-[1px] p-1`}
									type='button'
								>
									Tạm ẩn
								</button>
							</div>
							<div className='text-xs text-red-500'>{errors.isHide?.message}</div>
						</div>
					</div>
				</div>
				<button className='p-2 rounded-sm text-sm bg-green-300' type='submit'>
					Lưu
				</button>
			</form>
		</div>
	);
};
