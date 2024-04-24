import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type CandidateModelType = {
	_id: ObjectId;
	accountId: ObjectId;
	name: string;
	phone: string;
	gender: string;
};

const candidateSchema = new mongoose.Schema(
	{
		accountId: {
			type: ObjectId,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		phone: {
			type: String,
			require: true,
		},
		gender: {
			type: String,
			require: true,
		},
		dataCV: {
			type: Object,
			require: false,
		},
	},
	{
		timestamps: true,
	}
);

const Candidate = mongoose.models.candidates || mongoose.model("candidates", candidateSchema);
export default Candidate;
