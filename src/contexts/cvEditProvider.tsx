"use client";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const CvEditContext = createContext<{ cvObjectData: UserDataForm | null; setCvObjectData: Dispatch<SetStateAction<UserDataForm | null>> }>({
	cvObjectData: null,
	setCvObjectData: () => {},
});

export default function CvEditProvider({ children }: { children: JSX.Element }) {
	const [cvObjectData, setCvObjectData] = useState<UserDataForm | null>(null);
	return <CvEditContext.Provider value={{ cvObjectData, setCvObjectData }}>{children}</CvEditContext.Provider>;
}
