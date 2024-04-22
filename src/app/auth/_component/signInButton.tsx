"use client";
import { MouseEventHandler } from "react";

export default ({ name, logoSrc, handleClick }: { name: string; logoSrc: string; handleClick: MouseEventHandler<HTMLButtonElement> }) => {
	return (
		<div className='flex items-center gap-2 border-[1px] p-1 rounded-sm cursor-pointer hover:bg-slate-200 select-none'>
			<img src={logoSrc} alt={name} className='w-8' draggable={false} />
			<button onClick={handleClick}>Đăng nhập bằng tài khoản {name}</button>
		</div>
	);
};
