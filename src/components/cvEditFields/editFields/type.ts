import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { UseFormGetValues, UseFormRegisterReturn, UseFormSetValue, UseFormTrigger } from "react-hook-form";

export type InputUIParams = {
	label?: string;
	index?: number;
	register: UseFormRegisterReturn;
	errors: string | undefined;
};

export type AvatarUIParams = {
	label?: string;
	errors: string;
	setValue: UseFormSetValue<UserDataForm>;
	getValues: UseFormGetValues<UserDataForm>;
	trigger: UseFormTrigger<UserDataForm>;
};

export type AvatarUI = ({ label, errors, setValue, getValues }: AvatarUIParams) => JSX.Element;

export type InputUI = ({ label, register, errors, index }: InputUIParams) => JSX.Element;

export type WrapperP<T> = {
	children: T;
	data?: any;
};

export type WrapperT<T> = ({ children, data }: WrapperP<T>) => JSX.Element;

export interface WrapperUI {
	T01: WrapperT<JSX.Element[]>;
	T02: WrapperT<JSX.Element[]>;
	T03: WrapperT<JSX.Element[]>;
	T04: WrapperT<JSX.Element>;
}
