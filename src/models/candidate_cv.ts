import { UserData } from "@/types/userData";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type CandidateCVModelType = {
	userId?: ObjectId;
	name: string;
	template: string;
	data: UserData;
};

const candidateCvSchema = new Schema(
	{
		userId: {
			type: ObjectId,
			require: true,
		},
		name: {
			type: String,
			require: true,
			unique: true,
		},
		template: {
			type: String,
			require: true,
		},
		data: {
			type: Object,
			require: true,
			unique: false,
		},
	},
	{
		timestamps: true,
	}
);

const Candidate_CV = mongoose.models.candidate_cvs || mongoose.model("candidate_cvs", candidateCvSchema);
export default Candidate_CV;
