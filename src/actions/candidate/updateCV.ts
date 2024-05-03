"use server";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { connectToDatabase } from "@/libs/mongoosedb";
import Candidate_CV from "@/models/candidate_cv";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export const updateCV = async ({ id, data }: { id: string; data: UserDataForm }) => {
	await connectToDatabase();
	const { acknowledged } = await Candidate_CV.updateOne(
		{
			_id: new ObjectId(id),
		},
		{
			$set: {
				data: data,
			},
		}
	);
	if (acknowledged) {
		revalidateTag(`/candidate/cv/${id}`);
	}
	return acknowledged;
};
