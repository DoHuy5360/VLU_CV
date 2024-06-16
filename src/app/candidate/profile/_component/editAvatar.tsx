import { Buttons } from "@/components/button/buttons";
import { AvatarUIParams } from "@/components/cvEditFields/editFields/type";
import FormErrors from "@/components/notification/formErrors";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import Image from "next/image";

export default function EditAvatar({ label, setValue, getValues, trigger, errors }: AvatarUIParams<UserDataForm>) {
	try {
		new URL(getValues("attrs.head.avatar"));
	} catch (error) {
		setValue("attrs.head.avatar", "/image/user.jpg");
		trigger("attrs.head.avatar");
	}
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor='avatar'>
					{label}
				</label>
				<div className='flex flex-col gap-1 border-slate-200 border-[1px] p-1'>
					<label htmlFor='profileAvatar' className='w-fit'>
						<Buttons.Solid.Yellow.Click text='Thay đổi ảnh đại diện' />
					</label>
					<input
						accept='image/*'
						onChange={async (e) => {
							const file = e.target.files?.[0];
							if(file){
								const data = new FormData()
								data.set('file', file)
								const result = await fetch("/api/file", {
									method: "post",
									body: data
								})
								const response = await result.json()
								if(response.success){
									setValue("attrs.head.avatar", response.url)
								}
							}
							trigger("attrs.head.avatar");
						}}
						type='file'
						id='profileAvatar'
						className='hidden'
					/>
					<Image src={getValues("attrs.head.avatar") == "null" ? "/image/user.jpg" : getValues("attrs.head.avatar")} width={80} height={0} alt='avatar' draggable={false} />
				</div>
			</div>
			<FormErrors message={errors} />
		</div>
	);
}
