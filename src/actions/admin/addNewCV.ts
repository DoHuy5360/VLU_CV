"use server";

import { CvDataForm } from "@/app/admin/cv/_component/view";
import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { ZodError, z } from "zod";

const cvSchema = z.object({
	name: z.string().trim().min(1, "Required"),
	thumbnail: z.string().min(1, "Required"),
});

export type Tcv = z.infer<typeof cvSchema>;

export const addNewCV = async (formData: CvDataForm) => {
	await connectToDatabase();
	const data = {
		name: formData.name,
		thumbnail: formData.thumbnail,
	};
	const validate = cvSchema.safeParse(data);
	if (validate.success) {
		const newCV = new CV(data);
		await newCV.save();
		// return null;
	} else {
		// return JSON.stringify(validate.error);
	}
};
