import { ImageUIParams } from "@/components/cvEditFields/editFields/type";
import FormErrors from "@/components/notification/formErrors";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import Image from "next/image";

export default function EditSkillImage({ label, setValue, getValues, trigger, errors, index }: ImageUIParams<PortfolioFormData>) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor='image'>
					{label}
				</label>
				<div className='border-slate-200 border-[1px] p-1 bg-white w-fit'>
					<input
						className='hidden'
						accept='image/*'
						onChange={async (e) => {
							const file = e.target.files?.[0];
							if (file) {
								setValue(`skills.${index}.icon`, await imageFileToBase64(file));
								trigger(`skills.${index}.icon`);
							}
						}}
						type='file'
						id={`icon-${index}`}
					/>
					<label htmlFor={`icon-${index}`}>
						<Image
							src={getValues(`skills.${index}.icon`) || "/image/user.jpg"}
							width={30}
							height={30}
							className='border-dashed border-[2px] hover:border-solid cursor-pointer'
							alt='image'
							draggable={false}
						/>
					</label>
				</div>
			</div>
			<FormErrors message={errors} />
		</div>
	);
}
