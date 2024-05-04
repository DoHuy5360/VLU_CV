"use client";
import { AvatarUIParams } from "@/components/cvEditFields/editFields/type";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import Image from "next/image";

export default function EditAvatar({ setValue, getValues, trigger, errors }: AvatarUIParams) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<div className='flex flex-col border-slate-200 border-[1px] p-1 gap-1'>
					<input
						accept='image/*'
						onChange={async (e) => {
							const file = e.target.files?.[0];
							file ? setValue("attrs.head.avatar", await imageFileToBase64(file)) : undefined;
							trigger("attrs.head.avatar");
						}}
						type='file'
						id='avatar'
					/>
					<Image src={getValues("attrs.head.avatar") || "/image/user.jpg"} width={128} height={0} alt='avatar' draggable={false} />
				</div>
			</div>
			<div className='text-xs text-red-500'>{errors}</div>
		</div>
	);
}
