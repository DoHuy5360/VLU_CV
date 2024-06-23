"use client";

import applyCV from "@/actions/candidate/applyCV";
import { Buttons } from "@/components/button/buttons";
import FormErrors from "@/components/notification/formErrors";
import { Transfer } from "@/types/tranfer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type DataCV = {
	id: string;
	data: string;
	template: string;
};

const applyJobSchema = z.object({
	message: z.string().min(1, "Trường thông tin này là cần thiết"),
});

type ApplyJobFormData = z.infer<typeof applyJobSchema>;

export default function Apply({ listOfCVs, recruitmentId }: { listOfCVs: string; recruitmentId: string }) {
	const dataListOfCvs = useRef<any[]>(JSON.parse(listOfCVs));
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<ApplyJobFormData>({
		resolver: zodResolver(applyJobSchema),
	});

	const [isShowListCVs, setShowListCVs] = useState(false);

	const [dataCV, setDataCV] = useState<DataCV | null>(null);

	const [cvSelected, setSelectedCV] = useState<number>();

	return (
		<div>
			<div className={`${isShowListCVs ? "fixed" : "hidden"} h-dvh w-full top-0 left-0 bg-white flex`}>
				<div className='p-2 flex flex-col gap-2 border-r-[1px] flex-grow basis-3/12'>
					<div className='flex flex-col gap-1'>
						<label htmlFor='message' className='text-lg font-bold'>
							Lời nhắn tới nhà tuyển dụng
						</label>
						<textarea id='message' {...register("message")} className='border-[1px] resize-y max-h-[300px] min-h-[200px] p-2' placeholder='Giới thiệu ngắn về bản thân ...'></textarea>
						<FormErrors message={errors.message?.message} />
					</div>
					<div className='flex flex-col gap-1 h-full'>
						<div className='text-lg font-bold'>Danh sách CV của tôi</div>
						<div className='flex flex-col gap-2 select-none overflow-y-scroll flex-grow border-[1px] py-2'>
							{dataListOfCvs.current.map((e, i) => {
								return (
									<div
										key={i}
										onClick={() => {
											setDataCV({
												id: e._id,
												data: e.data,
												template: e.template,
											});
											setSelectedCV(i);
										}}
										className={`${cvSelected == i ? "bg-slate-200" : ""} cursor-pointer hover:bg-slate-200 p-2 flex gap-2`}
									>
										<div>{i + 1}.</div>
										<div>{e.name}</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className='flex-grow basis-8/12'>
					{dataCV ? (
						<div className='h-dvh flex-grow pb-20 pt-5 overflow-y-scroll bg-slate-200'>
							<div className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-3/4 shadow-lg whitespace-normal'>{Transfer[dataCV.template](dataCV.data)}</div>
						</div>
					) : (
						<div className='grid place-items-center h-dvh select-none'>Hãy chọn một CV để xem trước</div>
					)}
				</div>
				<div className='p-2 border-l-[1px] flex-grow basis-1/12 flex flex-col gap-2'>
					<div
						onClick={() => {
							setShowListCVs(false);
						}}
					>
						<Buttons.Solid.Red.Click text='Đóng' />
					</div>
					<form
						action={() => {
							handleSubmit(async () => {
								if (dataCV?.id !== undefined) {
									const isApplySuccess = await applyCV(dataCV.id, recruitmentId, getValues("message"));
									if (isApplySuccess) {
										alert("Ứng tuyển thành công");
										setShowListCVs(false);
									} else {
										alert("Ứng tuyển không thành công");
									}
								} else {
									alert("Hãy chọn CV muốn ứng tuyển");
								}
							})();
						}}
					>
						<Buttons.Submit.Save text='Nộp' />
					</form>
				</div>
			</div>
			<div
				onClick={() => {
					setShowListCVs(true);
				}}
			>
				<Buttons.Solid.Yellow.Click text='Ứng tuyển' />
			</div>
		</div>
	);
}
