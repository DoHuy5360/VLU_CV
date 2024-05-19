import { Buttons } from "@/components/button/buttons";
import { WrapperP, WrapperUI } from "@/components/cvEditFields/editFields/type";

export const Wrapper: WrapperUI = {
	T01: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='flex flex-grow flex-col gap-2 bg-[#F1F5F9] p-2 w-full overflow-y-scroll'>{children}</div>;
	},
	T02: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return (
			<div className='flex flex-col h-[inherit] overflow-hidden'>
				<div className='flex justify-end p-2'>
					<div onClick={data.prepend} className='w-fit'>
						<Buttons.Create.TextIcon />
					</div>
				</div>
				<div className='flex flex-col gap-2 h-[inherit] overflow-y-scroll p-2 border-t-[1px]'>{children}</div>
			</div>
		);
	},

	T03: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='flex flex-col gap-2 border-[1px] border-slate-200 p-2 rounded-sm bg-[#F1F5F9]'>{children}</div>;
	},
	T04: ({ children, data }: WrapperP<JSX.Element>) => {
		return <div className='p-2'>{children}</div>;
	},
	T05: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='flex gap-2 items-baseline'>{children}</div>;
	},
};
