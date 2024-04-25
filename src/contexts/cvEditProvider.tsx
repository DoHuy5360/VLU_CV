"use client";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const CvEditContext = createContext<{ cvOjectData: UserDataForm | null; setCvObjectData: Dispatch<SetStateAction<UserDataForm | null>> }>({
	cvOjectData: null,
	setCvObjectData: () => {},
});

export default function CvEditProvider({ children }: { children: JSX.Element }) {
	const [cvOjectData, setCvObjectData] = useState<UserDataForm | null>(null);
	return <CvEditContext.Provider value={{ cvOjectData, setCvObjectData }}>{children}</CvEditContext.Provider>;
}
