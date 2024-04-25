import { CvActionType, CvContext } from "@/contexts/cvProvider";
import { ChangeEvent, useCallback, useContext } from "react";
import {
	UseFormRegister,
	UseFormRegisterReturn,
	useFormContext,
} from "react-hook-form";
import { UserDataForm, deType } from "./editCvForm";

export default ({
	label,
	register,
	errors,
	index,
}: {
	label?: string;
	index?: number;
	register: UseFormRegisterReturn;
	errors: string | undefined;
}) => {
	return (
		<div className='flex items-start gap-1 w-full'>
			{label && (
				<label
					className='text-xs cursor-pointer whitespace-nowrap'
					htmlFor={register.name}
				>
					{label}
				</label>
			)}
			<div className='flex flex-col gap-1 w-full'>
				<input
					{...register}
					className='border-slate-200 border-[1px] px-2 text-xs w-full'
					type='text'
					id={register.name}
				/>
				<div className='text-xs text-red-600'>{errors}</div>
			</div>
		</div>
	);
};
