"use client";
import { CvContext } from "@/contexts/cvProvider";
import { Transfer } from "@/types/tranfer";
import { useContext } from "react";
export default function CvRenderer({ cvName }: { cvName: string }) {
	const { state } = useContext(CvContext);
	return Transfer[cvName](state);
}
