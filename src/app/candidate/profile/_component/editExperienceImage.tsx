import { ImageUIParams } from "@/components/cvEditFields/editFields/type";
import FormErrors from "@/components/notification/formErrors";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { imageFileToBase64 } from "@/utils/generateB64Image";
import { getTimeId } from "@/utils/getTimeId";
import Image from "next/image";

const arrImages = [
	{
		id: "experienceImage0",
	},
	{
		id: "experienceImage1",
	},
	{
		id: "experienceImage2",
	},
	{
		id: "experienceImage3",
	},
	{
		id: "experienceImage4",
	},
];

export default function EditExperienceImage({ label, setValue, getValues, trigger, errors, index }: ImageUIParams<PortfolioFormData>) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor='image'>
					{label}
				</label>
				<div className='flex flex-col gap-1 border-slate-200 border-[1px] p-1 bg-white'>
					<div className='flex gap-2'>
						{arrImages.map((e, imageIndex) => {
							return (
								<div key={e.id}>
									<input
										className='hidden'
										accept='image/*'
										onChange={async (e) => {
											const file = e.target.files?.[0];
											if (file) {
												setValue(`experiences.${index}.images.${imageIndex}`, {
													id: getTimeId(),
													label: file.name.split(".")[0],
													src: await imageFileToBase64(file),
												});
												trigger(`experiences.${index}.images.${imageIndex}.src`);
											}
										}}
										type='file'
										id={e.id}
									/>
									<label htmlFor={e.id}>
										<Image
											src={getValues(`experiences.${index}.images.${imageIndex}.src`) || "/image/user.jpg"}
											width={80}
											height={120}
											className='border-dashed border-[2px] hover:border-solid cursor-pointer'
											alt='image'
											draggable={false}
										/>
									</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<FormErrors message={errors} />
		</div>
	);
}
