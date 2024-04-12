"use server";

import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { ZodError, z } from "zod";

const cvSchema = z.object({
	name: z.string().trim().min(1, "Required"),
	thumbnail: z.string().min(1, "Required"),
});

export type Tcv = z.infer<typeof cvSchema>;

export const addNewCV = async (formData: FormData) => {
	await connectToDatabase();
	const data = {
		name: formData.get("name"),
		thumbnail: formData.get("thumbnail"),
	};
	const validate = cvSchema.safeParse(data);
	if (validate.success) {
		const newCV = new CV(data);
		newCV.save();
		// return null;
	} else {
		// return JSON.stringify(validate.error);
	}
};
