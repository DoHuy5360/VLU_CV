import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Company from "./company";
import { positions } from "./constant/position";

const recruiterSchema = z.object({
	gender: z
		.enum(["male", "female"])
		.nullable()
		.refine((value) => (value === null ? false : ["male", "female"].includes(value)), { message: "Hãy chọn giới tính." }),
	name: z.string().min(1, "Hãy nhập họ và tên."),
	phone: z.string().min(1, "Hãy nhập số điện thoại."),
	company: z.string().min(1, "Hãy nhập tên công ty."),
	province: z
		.string()
		.nullable()
		.refine((value) => value !== null, { message: "Hãy chọn tỉnh thành." }),
	district: z
		.string()
		.nullable()
		.refine((value) => value !== null, { message: "Hãy chọn quận huyện." }),
	position: z
		.string()
		.nullable()
		.refine((value) => (value === null ? false : positions.includes(value)), { message: "Hãy chọn chức vụ." }),
});

export type RecruiterDataForm = z.infer<typeof recruiterSchema>;
export default function Register() {
	const formTools = useForm<RecruiterDataForm>({
		resolver: zodResolver(recruiterSchema),
		defaultValues: {
			gender: null,
			name: "",
			phone: "",
			company: "",
			province: null,
			district: null,
			position: null,
		},
	});
	return (
		<FormProvider {...formTools}>
			<div className='flex flex-col gap-2 border-l-[1px] border-slate-200'>
				<div className='text-4xl p-2 border-b-[1px] border-slate-200'>Tạo tài khoản tuyển dụng</div>
				<form
					action={() => {
						formTools.handleSubmit((data) => {
							console.log(data);
						})();
					}}
					className='text-sm p-3 flex flex-col gap-4'
				>
					<div className='grid grid-cols-2 border-[1px] border-slate-200 p-2'>
						<div className='flex flex-col gap-2 '>
							<div className='flex flex-col gap-2'>
								<div className='flex flex-col w-fit gap-1'>
									<label htmlFor=''>Họ và tên</label>
									<input {...formTools.register("name")} className='border-[1px] px-1 border-slate-200' type='text' />
									<div className='text-red-500 text-xs'>{formTools.formState.errors.name?.message}</div>
								</div>
								<div className='flex flex-col w-fit gap-1'>
									<label htmlFor=''>Số điện thoại</label>
									<input {...formTools.register("phone")} className='border-[1px] px-1 border-slate-200' type='text' />
									<div className='text-red-500 text-xs'>{formTools.formState.errors.phone?.message}</div>
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex gap-2 w-fit'>
									<div className='flex flex-col gap-1 items-center'>
										<label>Nam</label>
										<input {...formTools.register("gender")} className='cursor-pointer' type='radio' value='male' />
									</div>
									<div className='flex flex-col gap-1 items-center'>
										<label>Nữ</label>
										<input {...formTools.register("gender")} className='cursor-pointer' type='radio' value='female' />
									</div>
								</div>
								<div className='text-red-500 text-xs'>{formTools.formState.errors.gender?.message}</div>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<div className='flex flex-col w-fit gap-1'>
								<label htmlFor=''>Tên công ty</label>
								<textarea {...formTools.register("company")} className='border-[1px] px-1 border-slate-200 resize-none' />
								<div className='text-red-500 text-xs'>{formTools.formState.errors.company?.message}</div>
							</div>
							<Company />
						</div>
					</div>
					<button className='bg-green-300 px-4 py-2 rounded-full text-sm w-fit' type='submit'>
						Xác nhận
					</button>
				</form>
			</div>
		</FormProvider>
	);
}
