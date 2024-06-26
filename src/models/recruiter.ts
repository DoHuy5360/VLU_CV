import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type RecruiterModelType = {
	_id?: ObjectId;
	accountId: ObjectId;
	companyId: ObjectId;
	name: string;
	phone: string;
	gender: string;
	position: string;
};

const recruiterSchema = new mongoose.Schema(
	{
		accountId: {
			type: ObjectId,
			require: true,
		},
		companyId: {
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
