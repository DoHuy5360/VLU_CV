"use client";
import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";

export default ({
	label,
	value,
	updateType,
	index,
}: {
	label: string;
	value: string;
	updateType: string;
	index?: number;
}) => {
	const { dispatch } = useContext(CvContext);
	return (
		<div className='flex flex-col gap-1'>
			<label
				className='text-xs font-bold text-slate-400'
				htmlFor={updateType + "-" + index?.toString()}
			>
				{label}
			</label>
			<textarea
				onChange={(e) => {
					dispatch({
						type: updateType,
						value: e.target.value,
						index,
					});
				}}
				value={value}
				className='border-slate-200 min-h-28 max-h-52 border-[1px] p-1'
				id={updateType + "-" + index?.toString()}
			/>
		</div>
	);
};
