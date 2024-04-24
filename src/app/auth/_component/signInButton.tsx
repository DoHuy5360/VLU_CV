"use client";
import { MouseEventHandler } from "react";

export default ({ name, logoSrc, handleClick }: { name: string; logoSrc: string; handleClick: MouseEventHandler<HTMLDivElement> }) => {
	return (
		<div onClick={handleClick} className='flex items-center gap-2 border-[1px] p-1 rounded-sm cursor-pointer hover:bg-slate-200 select-none'>
			<img src={logoSrc} alt={name} className='w-8' draggable={false} />
			<div className='text-sm'>Đăng nhập bằng tài khoản {name}</div>
		</div>
	);
};
