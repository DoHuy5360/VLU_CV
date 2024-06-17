"use client";

import createCandidateProfile from "@/actions/candidate/createCandidateProfile";
import { Buttons } from "@/components/button/buttons";
import FormErrors from "@/components/notification/formErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { z } from "zod";

const createProfileSchema = z.object({
	name: z.string().min(1, "Hãy nhập tên hồ sơ."),
	type: z.enum(["cv", "portfolio"]).refine((value) => ["cv", "portfolio"].includes(value), { message: "Hãy chọn loại hồ sơ." }),
});

export type CreateProfileDataForm = z.infer<typeof createProfileSchema>;

export default function CreateProfile({ setShowCreateProfileDialog }: { setShowCreateProfileDialog: Function }) {
	const {
		handleSubmit,
		register,
		getValues,
		trigger,
		setValue,
		reset,
		formState: { errors },
	} = useForm<CreateProfileDataForm>({
		resolver: zodResolver(createProfileSchema),
		defaultValues: {
			name: "",
			type: "cv",
		},
	});
	return (
		<form
			action={() => {
				handleSubmit(async (data) => {
					const success = await createCandidateProfile(data);
					if (success) {
						alert("Tạo thành công");
						reset({ name: "", type: "cv" });
					} else {
						alert("Tạo thất bại");
					}
				})();
			}}
			className="select-none"
		>
			<div className='absolute top-0 left-0 bg-white grid place-items-center h-full w-full'>
				<div className='flex flex-col border-[1px] rounded-sm w-[400px] shadow-md'>
					<div className='flex items-center justify-between border-b-[1px] w-full pr-2'>
						<div className='p-2 text-lg'>Tạo hồ sơ mới</div>
						<div
							onClick={() => {
								setShowCreateProfileDialog(false);
							}}
							className='p-2 hover:bg-slate-200 active:bg-slate-300 cursor-pointer'
						>
							<IoClose />
						</div>
					</div>
					<div className='flex flex-col gap-4 p-2 items-end w-full'>
						<div className='flex flex-col gap-2 w-full'>
							<div className='flex flex-col gap-1'>
								<label htmlFor=''>Tên hồ sơ</label>
								<input {...register("name")} className='px-1 border-[1px] w-full' type='text' />
								<FormErrors message={errors.name?.message} />
							</div>
							<div className='flex flex-col gap-1'>
								<label htmlFor=''>Loại hồ sơ</label>
								<div className='flex gap-2 text-xs'>
									<div
										onClick={() => {
											setValue("type", "cv");
											trigger("type");
										}}
										className={`${getValues("type") === "cv" ? "bg-orange-300" : "bg-slate-200"} p-2 cursor-pointer hover:bg-orange-400 active:bg-orange-300 border-[1px] rounded-full`}
									>
										CV
									</div>
									<div
										onClick={() => {
											setValue("type", "portfolio");
											trigger("type");
										}}
										className={`${getValues("type") === "portfolio" ? "bg-orange-300" : "bg-slate-200"} p-2 cursor-pointer hover:bg-orange-400 active:bg-orange-300 border-[1px] rounded-full`}
									>
										Portfolio
									</div>
								</div>
								<FormErrors message={errors.type?.message} />
							</div>
						</div>
						<Buttons.Submit.Save />
					</div>
				</div>
			</div>
		</form>
	);
}
