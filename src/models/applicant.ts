import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type ApplicantModelType = {
	_id?: ObjectId;
	recruitmentId: ObjectId;
	candidateCvId: ObjectId;
	message: string;
};

const applicantSchema = new Schema(
	{
		recruitmentId: {
			type: ObjectId,
			ref: "recruitments",
			require: true,
		},
		candidateCvId: {
			type: ObjectId,
			ref: "candidate_cvs",
			require: true,
		},
		message: {
			type: String,
			require: false,
		},
	},
	{
		timestamps: true,
	}
);

const Applicant = mongoose.models.applicants || mongoose.model("applicants", applicantSchema);
export default Applicant;
