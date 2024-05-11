import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { ImageSchema } from "@/entities/getDataPortfolio";
import { FieldValues, UseFormGetValues, UseFormRegisterReturn, UseFormSetValue, UseFormTrigger } from "react-hook-form";
import { z } from "zod";

export type InputUIParams = {
	label?: string;
	index?: number;
	register: UseFormRegisterReturn;
	errors?: string;
};

// export type AvatarUIParams = {
// 	label?: string;
// 	errors: string;
// 	setValue: UseFormSetValue<UserDataForm>;
// 	getValues: UseFormGetValues<UserDataForm>;
// 	trigger: UseFormTrigger<UserDataForm>;
// };
export type AvatarUIParams<T extends FieldValues> = {
	label?: string;
	errors?: string;
	setValue: UseFormSetValue<T>;
	getValues: UseFormGetValues<T>;
	trigger: UseFormTrigger<T>;
};

export type ImageUIParams<T extends FieldValues> = {
	label?: string;
	errors?: string;
	setValue: UseFormSetValue<T>;
	getValues: UseFormGetValues<T>;
	trigger: UseFormTrigger<T>;
	index: number;
};

export type ImageUI<T extends FieldValues> = ({ label, errors, setValue, getValues }: ImageUIParams<T>) => JSX.Element;

export type AvatarUI<T extends FieldValues> = ({ label, errors, setValue, getValues }: AvatarUIParams<T>) => JSX.Element;

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
