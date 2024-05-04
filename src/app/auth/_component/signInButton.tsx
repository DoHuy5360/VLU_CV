"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

export default function SignInButton({ name, logoSrc, handleClick, helper }: { name: string; logoSrc: string; handleClick: MouseEventHandler<HTMLDivElement>; helper?: string }) {
	return (
		<div className='flex flex-col gap-1 border-[1px] rounded-sm cursor-pointer hover:bg-slate-200 select-none'>
			<div onClick={handleClick} className='border-b-[1px] p-1 flex items-center gap-2'>
				<Image src={logoSrc} alt={name} width={32} height={32} draggable={false} />
				<div className='text-sm'>Đăng nhập bằng tài khoản {name}</div>
			</div>
			<div className='text-xs text-blue-500 p-1'>* {helper}</div>
		</div>
	);
}
