import { InputUIParams } from "@/components/cvEditFields/editFields/type";

export default function EditInput({ label, register, errors, index }: InputUIParams) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor={register.name}>
					{label}
				</label>
				<input {...register} className='border-slate-200 border-[1px] p-1' type='text' id={register.name} />
			</div>
			<div className='text-xs text-red-500'>{errors}</div>
		</div>
	);
}
