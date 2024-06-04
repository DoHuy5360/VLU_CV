"use client";

import { Buttons } from "@/components/button/buttons";
import { signOut } from "next-auth/react";

export default function SignOut() {
	return (
		<div
			onClick={() => {
				signOut();
			}}
			className='grid place-items-center h-dvh'
		>
			<div className='flex flex-col gap-4 items-center'>
				<div>Chắc chắn đăng xuất?</div>
				<Buttons.Solid.Cyan.Click text='Đăng xuât' />
			</div>
		</div>
	);
}
