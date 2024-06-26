import { InputUIParams } from "@/components/cvEditFields/editFields/type";
import FormErrors from "@/components/notification/formErrors";

export default function EditArea({ label, register, errors, index }: InputUIParams) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor={register.name}>
					{label}
				</label>
				<textarea {...register} className='border-slate-200 min-h-64 max-h-96 border-[1px] p-1' id={register.name} />
			</div>
			<FormErrors message={errors} />
		</div>
	);
}
