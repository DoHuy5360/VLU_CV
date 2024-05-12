import { WrapperP, WrapperUI } from "@/components/cvEditFields/editFields/type";

export const Wrapper: WrapperUI = {
	T01: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='flex flex-col gap-2 bg-slate-100 p-2 w-full'>{children}</div>;
	},
	T02: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return (
			<div className='flex flex-col gap-1'>
				<button onClick={data.prepend} className='px-2 py-1 bg-blue-300 rounded-sm w-fit ml-auto' type='button'>
					Add
				</button>
				<div className='flex flex-col gap-2'>{children}</div>
			</div>
		);
	},

	T03: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='flex flex-col gap-2 border-[1px] border-slate-200 p-2 rounded-sm bg-slate-50'>{children}</div>;
	},
	T04: ({ children, data }: WrapperP<JSX.Element>) => {
		return <div>{children}</div>;
	},
	T05: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='flex gap-2 items-baseline'>{children}</div>;
	},
};
