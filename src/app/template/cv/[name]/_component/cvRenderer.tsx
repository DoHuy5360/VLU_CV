"use client";
import { Transfer, TransferType } from "@/types/tranfer";
import { useContext } from "react";
import { FormValuesContext } from "../page";
export default function CvRenderer({ cvName }: { cvName: string }) {
	const formValues = useContext(FormValuesContext);
	return Transfer[cvName](formValues);
}
