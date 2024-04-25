"use client";
import { Transfer, TransferType } from "@/types/tranfer";
import { useContext } from "react";
import { FormValuesContext } from "../editCV";
export default function CvRenderer({ cvName }: { cvName: string }) {
	const formValues = useContext(FormValuesContext);
	return Transfer[cvName](formValues);
}
