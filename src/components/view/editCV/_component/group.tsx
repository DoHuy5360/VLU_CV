import { CvAction } from "@/contexts/cvProvider";
import { UseFieldArrayPrepend } from "react-hook-form";
import { BiPlus } from "react-icons/bi";

export default ({
	label,
	children,
	prepend,
}: {
	label: string;
	children: JSX.Element;
	prepend?: UseFieldArrayPrepend<any>;
}) => {
	return (
		<fieldset className='border border-solid border-slate-300 p-3'>
			<legend className='flex justify-between items-center w-full'>
				<div className='whitespace-nowrap'>{label}</div>
				<div className='h-[0.5px] w-full bg-slate-300'></div>
				<div className='flex gap-2 items-center'>
					{prepend && (
						<div
							onClick={prepend}
							className='p-1 rounded-sm border-[1px] border-slate-300 cursor-pointer hover:bg-slate-200'
						>
							<BiPlus />
						</div>
					)}
				</div>
			</legend>
			{children}
		</fieldset>
	);
};
