import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
