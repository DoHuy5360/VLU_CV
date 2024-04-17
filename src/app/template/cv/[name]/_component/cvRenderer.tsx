"use client";
import { CvContext } from "@/contexts/cvProvider";
import { Transfer, TransferType } from "@/types/tranfer";
import { useContext } from "react";
export default function CvRenderer({ cvName }: { cvName: string }) {
	const { state } = useContext(CvContext);
	return state === null ? (
		<div>Loading...</div>
	) : (
		Transfer[cvName](state)
	);
}
