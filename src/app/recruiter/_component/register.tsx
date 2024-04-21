import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Province from "./province";
import { provinces } from "./address/province";

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
		.refine(
			(value) => {
				return value === null ? false : provinces.map((e) => e.name === value).length > 0;
			},
			{ message: "Hãy chọn tỉnh thành." }
		),
	district: z
		.string()
		.nullable()
		.refine(
			(value) => {
				return value === null ? false : true;
			},
			{ message: "Hãy chọn quận huyện." }
		),
});

export type RecruiterDataForm = z.infer<typeof recruiterSchema>;
export default function Register() {
	const formTools = useForm<RecruiterDataForm>({
		resolver: zodResolver(recruiterSchema),
	});
	const onSubmit = (data: RecruiterDataForm) => console.log(data);
	return (
		<FormProvider {...formTools}>
			<div className='flex flex-col gap-2 border-l-[1px] border-slate-200'>
				<div className='text-4xl p-2'>Tạo tài khoản tuyển dụng</div>
				<form onSubmit={formTools.handleSubmit(onSubmit)} className='text-sm p-3 flex flex-col gap-4'>
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
							<Province />
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
