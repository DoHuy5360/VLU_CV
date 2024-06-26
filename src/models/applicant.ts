import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type ApplicantModelType = {
	_id?: ObjectId;
	candidateId: ObjectId;
	recruitmentId: ObjectId;
	candidateCvId: ObjectId;
	message: string;
	isDeleted?: boolean;
};

const applicantSchema = new Schema(
	{
		candidateId: {
			type: ObjectId,
			ref: "candidates",
			require: true,
		},
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
		isDeleted: {
			type: Boolean,
			require: false,
		},
	},
	{
		timestamps: true,
	}
);

const Applicant = mongoose.models.applicants || mongoose.model("applicants", applicantSchema);
export default Applicant;
