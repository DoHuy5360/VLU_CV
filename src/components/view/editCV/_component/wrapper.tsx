import { WrapperP, WrapperUI } from "@/components/cvEditFields/editFields/type";
import Group from "./group";

export const Wrapper: WrapperUI = {
	T01: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return (
			<Group label={data.label}>
				<div className='flex flex-col p-1 gap-1 bg-[#F1F5F9] rounded-sm'>{children}</div>
			</Group>
		);
	},
	T02: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return (
			<Group label={data.label} prepend={data.prepend}>
				<div className='flex flex-col gap-1 bg-[#F1F5F9] rounded-sm'>{children}</div>
			</Group>
		);
	},
	T03: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div className='text-xs flex flex-col gap-1 border-[1px] border-slate-200 p-1 bg-[#F1F5F9] rounded-sm'>{children}</div>;
	},
	T04: ({ children, data }: WrapperP<JSX.Element>) => {
		return <Group label={data.label}>{children}</Group>;
	},
	T05: ({ children, data }: WrapperP<JSX.Element[]>) => {
		return <div>{children}</div>;
	},
};
