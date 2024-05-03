import { UseFormRegisterReturn } from "react-hook-form";

export default ({ label, register, errors, index }: { label?: string; index?: number; register: UseFormRegisterReturn; errors: string | undefined }) => {
	return (
		<div className='flex items-start gap-1 w-full'>
			{label && (
				<label className='text-xs cursor-pointer whitespace-nowrap' htmlFor={register.name}>
					{label}
				</label>
			)}
			<div className='flex flex-col gap-1 w-full'>
				<textarea {...register} id={register.name} className='border-slate-200 border-[1px] p-2 text-xs resize-none h-36 w-full'></textarea>
				<div className='text-xs text-red-600'>{errors}</div>
			</div>
		</div>
	);
};
