import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { usePathname } from "next/navigation";
import { signIn } from "next-auth/react";
import { createCandidateAccount } from "@/actions/candidate/createCandidateAccount";

const candidateSchema = z
	.object({
		gender: z
			.enum(["male", "female"])
			.nullable()
			.refine((value) => (value === null ? false : ["male", "female"].includes(value)), { message: "Hãy chọn giới tính." }),
		name: z.string().min(1, "Hãy nhập họ và tên."),
		phone: z.string().min(1, "Hãy nhập số điện thoại."),
		email: z.string().min(1, "Hãy nhập email."),
		password: z.string().min(1, "Hãy nhập mật khẩu."),
		rePassword: z.string().min(1, "Hãy nhập lại mật khẩu trên."),
	})
	.refine((schema) => schema.password === schema.rePassword, { message: "Mật khẩu phải khớp.", path: ["rePassword"] });

export type CandidateDataForm = z.infer<typeof candidateSchema>;

export default function CandidateRegisterAccountForm() {
	const formTools = useForm<CandidateDataForm>({
		resolver: zodResolver(candidateSchema),
		defaultValues: {
			gender: null,
			name: "",
			phone: "",
			email: "",
			password: "",
			rePassword: "",
		},
	});
	const pathName = usePathname();
	return (
		<FormProvider {...formTools}>
			<div className='flex flex-col gap-2 border-[1px] border-slate-200 select-none'>
				<div className='text-4xl p-2 border-b-[1px] border-slate-200'>Tạo tài khoản ứng viên</div>
				<form
					action={() => {
						formTools.handleSubmit(async (data: CandidateDataForm) => {
							const isCreateAccountSuccess = await createCandidateAccount(data);
							if (isCreateAccountSuccess) {
								signIn("credentials", {
									email: data.email,
									password: data.password,
									redirect: true,
									callbackUrl: "/home",
								});
							} else {
								alert("Tạo tài khoản thất bại");
							}
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
								<div className='flex flex-col w-fit gap-1'>
									<label htmlFor=''>Email</label>
									<input {...formTools.register("email")} className='border-[1px] px-1 border-slate-200' type='text' />
									<div className='text-red-500 text-xs'>{formTools.formState.errors.email?.message}</div>
								</div>
								<div className='flex flex-col w-fit gap-1'>
									<label htmlFor=''>Mật khẩu</label>
									<input {...formTools.register("password")} className='border-[1px] px-1 border-slate-200' type='password' />
									<div className='text-red-500 text-xs'>{formTools.formState.errors.password?.message}</div>
								</div>
								<div className='flex flex-col w-fit gap-1'>
									<label htmlFor=''>Nhập lại mật khẩu</label>
									<input {...formTools.register("rePassword")} className='border-[1px] px-1 border-slate-200' type='password' />
									<div className='text-red-500 text-xs'>{formTools.formState.errors.rePassword?.message}</div>
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex gap-3 w-fit'>
									<div className='flex gap-1 items-center'>
										<label>Nam</label>
										<input {...formTools.register("gender")} className='cursor-pointer' type='radio' value='male' />
									</div>
									<div className='flex gap-1 items-center'>
										<label>Nữ</label>
										<input {...formTools.register("gender")} className='cursor-pointer' type='radio' value='female' />
									</div>
								</div>
								<div className='text-red-500 text-xs'>{formTools.formState.errors.gender?.message}</div>
							</div>
						</div>
					</div>
					<button className='ml-auto bg-green-300 px-4 py-2 rounded-full text-sm w-fit' type='submit'>
						Xác nhận
					</button>
				</form>
			</div>
		</FormProvider>
	);
}
