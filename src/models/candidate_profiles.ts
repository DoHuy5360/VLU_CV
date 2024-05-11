import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type CandidateProfileModelType = {
	_id?: ObjectId;
	accountId: ObjectId;
	name: string;
	type: string;
	data: Object;
	default: boolean;
};

const candidateProfileSchema = new mongoose.Schema(
	{
		accountId: {
			type: ObjectId,
			require: true,
		},
		name: {
			type: String,
			require: true,
		},
		type: {
			type: String,
			require: true,
		},
		data: {
			type: Object,
			require: false,
		},
		default: {
			type: Boolean,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const Candidate_Profile = mongoose.models.candidate_profiles || mongoose.model("candidate_profiles", candidateProfileSchema);
export default Candidate_Profile;
