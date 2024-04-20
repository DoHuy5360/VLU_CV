import { UseFormRegisterReturn } from "react-hook-form";

export type InputUIParams = {
	label?: string;
	index?: number;
	register: UseFormRegisterReturn;
	errors: string | undefined;
};
export type InputUI = ({
	label,
	register,
	errors,
	index,
}: InputUIParams) => JSX.Element;

export type WrapperP<T> = {
	children: T;
	data?: any;
};

export type WrapperT<T> = ({
	children,
	data,
}: WrapperP<T>) => JSX.Element;

export interface WrapperUI {
	T01: WrapperT<JSX.Element[]>;
	T02: WrapperT<JSX.Element[]>;
	T03: WrapperT<JSX.Element[]>;
	T04: WrapperT<JSX.Element>;
}
