import { InputUIParams } from "@/components/cvEditFields/editFields/type";

export default function EditArea({ label, register, errors, index }: InputUIParams) {
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label className='text-xs font-bold text-slate-400' htmlFor={register.name}>
					{label}
				</label>
				<textarea {...register} className='border-slate-200 min-h-28 max-h-52 border-[1px] p-1' id={register.name} />
			</div>
			<div className='text-xs text-red-500'>{errors}</div>
		</div>
	);
}
