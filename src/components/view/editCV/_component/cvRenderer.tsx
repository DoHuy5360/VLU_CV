"use client";
import { Transfer } from "@/types/tranfer";
import { memo, useContext } from "react";
import { FormValuesContext } from "../editCV";
export default memo(function CvRenderer() {
	const formValues = useContext(FormValuesContext);
	return Transfer[formValues.template](formValues);
});
