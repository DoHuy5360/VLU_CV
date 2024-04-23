import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recruiterSchema = new Schema(
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
		position: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const Recruiter = mongoose.models.recruiters || mongoose.model("recruiters", recruiterSchema);
export default Recruiter;
