import { Buttons } from "@/components/button/buttons";
import { UseFieldArrayPrepend } from "react-hook-form";

export default function Group({ label, children, prepend }: { label: string; children: JSX.Element; prepend?: UseFieldArrayPrepend<any> }) {
	return (
		<fieldset className='border border-solid border-slate-300 p-3'>
			<legend className='flex justify-between items-center w-full'>
				<div className='whitespace-nowrap'>{label}</div>
				<div className='h-[0.5px] w-full bg-slate-300'></div>
				<div className='flex gap-2 items-center'>
					{prepend && (
						<div onClick={prepend}>
							<Buttons.Create.Icon />
						</div>
					)}
				</div>
			</legend>
			{children}
		</fieldset>
	);
}
