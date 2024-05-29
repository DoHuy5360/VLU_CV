"use client";
import { Transfer } from "@/types/tranfer";
import { memo, useContext } from "react";
import { FormValuesContext } from "../editCV";
export default memo(function CvRenderer({ cvTemplateName }: { cvTemplateName: string }) {
	const formValues = useContext(FormValuesContext);
	return Transfer[cvTemplateName](formValues);
});
