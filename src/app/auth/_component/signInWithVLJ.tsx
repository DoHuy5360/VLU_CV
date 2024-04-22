import { signIn } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const vljLoginSchema = z.object({
	email: z.string().min(1, "Hãy nhập email."),
	password: z.string().min(1, "Hãy nhập mật khẩu."),
});

type VljLoginDataForm = z.infer<typeof vljLoginSchema>;

export default function SignInWithVLJ() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<VljLoginDataForm>({
		resolver: zodResolver(vljLoginSchema),
	});
	const searchParams = useSearchParams();

	const error = searchParams.get("error");

	const validate = (credentials: VljLoginDataForm) => {
		signIn("credentials", {
			...credentials,
			redirect: true,
			callbackUrl: "/home",
		});
	};

	return (
		<form onSubmit={handleSubmit(validate)} className='flex flex-col text-sm gap-2 border-[1px] p-4 items-center rounded-sm select-none'>
			{error && <div className='text-red-500 text-xs'>Đăng nhập thất bại.</div>}
			<img src='/image/logo/van-lang-logo.png' className='w-8' alt='VanLang Jobs' draggable={false} />
			<div className='flex flex-col gap-1'>
				<label htmlFor=''>Email</label>
				<input {...register("email")} className='px-1 border-[1px]' type='text' />
				<div className='text-red-500 text-xs'>{errors.email?.message}</div>
			</div>
			<div className='flex flex-col gap-1'>
				<label htmlFor=''>Mật khẩu</label>
				<input {...register("password")} className='px-1 border-[1px]' type='password' />
				<div className='text-red-500 text-xs'>{errors.password?.message}</div>
			</div>
			<button className='px-2 py-1 bg-green-300 rounded-full' type='submit'>
				Đăng nhập
			</button>
		</form>
	);
}
