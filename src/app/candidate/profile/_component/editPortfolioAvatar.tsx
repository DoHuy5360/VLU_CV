import SelectFile from "@/components/button/selectFile";
import { AvatarUIParams } from "@/components/cvEditFields/editFields/type";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import Image from "next/image";

export default function EditPortfolioAvatar({ label, setValue, getValues, trigger, errors }: AvatarUIParams<PortfolioFormData>) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor='avatar'>
					{label}
				</label>
				<div className='flex flex-col gap-1 border-slate-200 border-[1px] p-1'>
					<SelectFile htmlFor='avatar' name='Thay đổi ảnh đại diện' />
					<input
						accept='image/*'
						onChange={async (e) => {
							const file = e.target.files?.[0];
							file ? setValue("personal.avatar", await imageFileToBase64(file)) : undefined;
							trigger("personal.avatar");
						}}
						type='file'
						id='avatar'
						className='hidden'
					/>
					<Image src={getValues("personal.avatar") || "/image/user.jpg"} width={80} height={0} alt='avatar' draggable={false} />
				</div>
			</div>
			<div className='text-xs text-red-500'>{errors}</div>
		</div>
	);
}
