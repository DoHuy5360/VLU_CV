import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
	email: z.string().min(1, "Hãy nhập email."),
	password: z.string().min(1, "Hãy nhập mật khẩu."),
});

type LoginDataForm = z.infer<typeof loginSchema>;
export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDataForm>({
		resolver: zodResolver(loginSchema),
	});
	const onSubmit = (data: LoginDataForm) => console.log(data);
	return (
		<div className='grid place-items-center'>
			<form onSubmit={handleSubmit(onSubmit)} className='p-2 flex flex-col gap-4 text-sm'>
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
				<button className='bg-green-300 px-4 py-2 rounded-full text-sm w-fit' type='submit'>
					Đăng nhập
				</button>
			</form>
		</div>
	);
}
