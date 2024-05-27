import { InputUIParams } from "@/components/cvEditFields/editFields/type";

export default function EditArea({ label, register, errors, index }: InputUIParams) {
	return (
		<div className='flex flex-col gap-1 w-full'>
			{label && (
				<label className='text-xs cursor-pointer whitespace-nowrap' htmlFor={register.name}>
					{label}
				</label>
			)}
			<div className='flex flex-col gap-1 w-full'>
				<textarea {...register} id={register.name} className='border-slate-200 border-[1px] p-2 py-1 rounded-sm text-xs resize-none h-36 w-full'></textarea>
				<div className='text-xs text-red-600'>{errors}</div>
			</div>
		</div>
	);
}
