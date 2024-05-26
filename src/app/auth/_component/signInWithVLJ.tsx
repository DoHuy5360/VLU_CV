import { signIn } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Buttons } from "@/components/button/buttons";

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
		<form onSubmit={handleSubmit(validate)} className='flex flex-col text-sm gap-3 border-[1px] p-4 items-center rounded-sm select-none w-full'>
			{error && <div className='text-red-500 text-xs'>Đăng nhập thất bại.</div>}
			<Image src='/image/logo/van-lang-logo.png' width={32} height={32} alt='van lang logo' draggable={false} />
			<div className='flex flex-col gap-1'>
				<label htmlFor=''>Email</label>
				<input {...register("email")} className='px-1 border-[1px] p-1' type='text' />
				<div className='text-red-500 text-xs'>{errors.email?.message}</div>
			</div>
			<div className='flex flex-col gap-1'>
				<label htmlFor=''>Mật khẩu</label>
				<input {...register("password")} className='px-1 border-[1px] p-1' type='password' />
				<div className='text-red-500 text-xs'>{errors.password?.message}</div>
			</div>
			<Buttons.Submit.Login.Text/>
		</form>
	);
}
