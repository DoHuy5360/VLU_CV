"use server";

import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import { z } from "zod";

const cvSchema = z.object({
	name: z.string().trim().min(1),
	thumbnail: z.string(),
});

type Tcv = z.infer<typeof cvSchema>;

export const addNewCV = async (formData: FormData) => {
	await connectToDatabase();
	const data = {
		name: formData.get("name"),
		thumbnail: "",
	};
	console.log(data);
	const validate = cvSchema.safeParse(data);
	if (validate.success) {
		const newCV = new CV(data);
		await newCV.save();
	} else {
		console.log(validate.error);
	}
};
