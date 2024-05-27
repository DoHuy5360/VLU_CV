"use client";
import { AvatarUIParams } from "@/components/cvEditFields/editFields/type";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import Image from "next/image";
import { UserDataForm } from "./editCvForm";
import { Buttons } from "@/components/button/buttons";

export default function EditAvatar({ setValue, getValues, trigger, errors }: AvatarUIParams<UserDataForm>) {
	return (
		<div className='flex flex-col gap-1 bg-white'>
			<div className='flex flex-col gap-1'>
				<div className='flex flex-col border-slate-200 border-[1px] p-1 gap-1'>
					<input
						className='hidden'
						accept='image/*'
						onChange={async (e) => {
							const file = e.target.files?.[0];
							file ? setValue("attrs.head.avatar", await imageFileToBase64(file)) : undefined;
							trigger("attrs.head.avatar");
						}}
						type='file'
						id='selectAvatarInput'
					/>
					<label className='w-fit' htmlFor='selectAvatarInput'>
						<Buttons.Solid.Yellow.Click text='Chọn ảnh đại diện' />
					</label>
					<Image src={getValues("attrs.head.avatar") || "/image/user.jpg"} width={128} height={0} alt='avatar' draggable={false} />
				</div>
			</div>
			{errors && <div className='text-xs text-red-500'>{errors}</div>}
		</div>
	);
}
