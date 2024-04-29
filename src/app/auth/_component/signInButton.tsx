"use client";
import { MouseEventHandler } from "react";

export default ({
	name,
	logoSrc,
	handleClick,
	helper,
}: {
	name: string;
	logoSrc: string;
	handleClick: MouseEventHandler<HTMLDivElement>;
	helper?: string;
}) => {
	return (
		<div className='flex flex-col gap-1 border-[1px] rounded-sm cursor-pointer hover:bg-slate-200 select-none'>
			<div onClick={handleClick} className='border-b-[1px] p-1 flex items-center gap-2'>
				<img src={logoSrc} alt={name} className='w-8' draggable={false} />
				<div className='text-sm'>Đăng nhập bằng tài khoản {name}</div>
			</div>
			<div className='text-xs text-blue-500 p-1'>* {helper}</div>
		</div>
	);
};
