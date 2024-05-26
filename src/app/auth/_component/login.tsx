import { Buttons } from "@/components/button/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginForRecruiterSchema = z.object({
	email: z.string().min(1, "Hãy nhập email."),
	password: z.string().min(1, "Hãy nhập mật khẩu."),
});

type LoginDataForm = z.infer<typeof loginForRecruiterSchema>;
export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDataForm>({
		resolver: zodResolver(loginForRecruiterSchema),
	});
	const onSubmit = (data: LoginDataForm) => console.log(data);
	return (
		<div className='flex flex-col'>
			<div className='text-4xl p-2 border-b-[1px] border-slate-200'>Đăng nhập</div>
			<div className='flex-grow grid place-items-center'>
				<form onSubmit={handleSubmit(onSubmit)} className='p-2 flex flex-col gap-4 text-sm border-[1px] border-slate-200'>
					<div className='flex flex-col gap-2'>
						<div className='flex flex-col gap-1'>
							<label htmlFor=''>Email</label>
							<input {...register("email")} className='border-[1px] px-1 border-slate-200' type='text' />
							<div className='text-red-500 text-xs'>{errors.email?.message}</div>
						</div>
						<div className='flex flex-col gap-1'>
							<label htmlFor=''>Mật khẩu</label>
							<input {...register("password")} className='border-[1px] px-1 border-slate-200' type='password' />
							<div className='text-red-500 text-xs'>{errors.password?.message}</div>
						</div>
					</div>
					<Buttons.Submit.Login.Text/>
				</form>
			</div>
		</div>
	);
}
