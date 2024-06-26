import { InputUIParams } from "@/components/cvEditFields/editFields/type";
import FormErrors from "@/components/notification/formErrors";

export default function EditInput({ label, register, errors, index }: InputUIParams) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor={register.name}>
					{label}
				</label>
				<input {...register} className='border-slate-200 border-[1px] p-2 py-1 rounded-sm' type='text' id={register.name} />
			</div>
			<FormErrors message={errors} />
		</div>
	);
}
