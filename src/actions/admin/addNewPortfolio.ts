"use server";

import { CvDataForm } from "@/app/admin/cv/_component/view";
import { connectToDatabase } from "@/services/mongoosedb";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import Portfolio from "@/models/portfolio";

const cvSchema = z.object({
	name: z.string().trim().min(1, "Required"),
	thumbnail: z.string().min(1, "Required"),
});

export type Tcv = z.infer<typeof cvSchema>;

export const addNewPortfolio = async (formData: CvDataForm) => {
	await connectToDatabase();
	const data = {
		name: formData.name,
		thumbnail: formData.thumbnail,
	};
	const validate = cvSchema.safeParse(data);
	if (validate.success) {
		const newCV = new Portfolio(data);
		const newCvCreated = await newCV.save();
		revalidateTag("/admin/cv");
		return newCvCreated === null ? false : true;
	} else {
		return false;
	}
};
