"use client";
import { CvActionType, CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

export default ({
	label,
	value,
	updateType,
	index,
}: {
	label: string;
	value: string;
	updateType: CvActionType;
	index?: number;
}) => {
	const { dispatch } = useContext(CvContext);
	return (
		<div className='flex flex-col gap-1'>
			<div className='flex flex-col gap-1'>
				<label
					className='text-xs font-bold text-slate-400'
					htmlFor={updateType + "-" + index?.toString()}
				>
					{label}
				</label>
				<input
					onChange={(e) => {
						dispatch({
							type: updateType,
							value: e.target.value,
							index: 0,
						});
					}}
					value={value}
					className='border-slate-200 border-[1px] p-1'
					type='text'
					id={updateType + "-" + index?.toString()}
				/>
			</div>
			<div className='text-xs text-red-500'>
				{value.trim() === "" && "*This field can not empty"}
			</div>
		</div>
	);
};
