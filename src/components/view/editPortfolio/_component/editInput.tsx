import { InputUIParams } from "@/components/cvEditFields/editFields/type";
import FormErrors from "@/components/notification/formErrors";

export default function EditInput({ label, register, errors, index }: InputUIParams) {
	return (
		<div className='flex gap-1 w-full items-baseline'>
			{label && (
				<label className='text-xs cursor-pointer whitespace-nowrap' htmlFor={register.name}>
					{label}
				</label>
			)}
			<div className='flex flex-col gap-1 w-full'>
				<input {...register} className='border-slate-200 border-[1px] px-2 py-1 text-xs w-full rounded-sm' type='text' id={register.name} />
				<FormErrors message={errors} />
			</div>
		</div>
	);
}
