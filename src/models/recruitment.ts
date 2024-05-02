import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type RecruimentSchemaType = {
	_id?: ObjectId;
	recruiterId: ObjectId;
	title: string;
	position: string;
	description: string;
	responsibility: string;
	requirement: string;
	benefit: string;
	address: string;
	experience: Object;
	salary: string;
	isHide: boolean;
	isClose: boolean;
	startAt: string;
	closeAt: string;
};

const experienceSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		year: { type: Number, required: true },
	},
	{ _id: false }
);
const recruitmentSchema = new mongoose.Schema(
	{
		recruiterId: {
			type: ObjectId,
			ref: "recruiters",
			require: true,
		},
		companyId: {
			type: ObjectId,
			ref: "companies",
			require: true,
		},
		title: {
			type: String,
			require: true,
		},
		position: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		responsibility: {
			type: String,
			require: true,
		},
		requirement: {
			type: String,
			require: true,
		},
		benefit: {
			type: String,
			require: true,
		},
		address: {
			type: Object,
			require: true,
		},
		experience: {
			type: experienceSchema,
			require: true,
		},
		schedule: {
			type: String,
			require: true,
		},
		salary: {
			type: String,
			require: true,
		},
		isHide: {
			type: Boolean,
			require: true,
			default: false,
		},
		isClose: {
			type: Boolean,
			require: true,
			default: false,
		},
		startAt: {
			type: Date,
			require: true,
		},
		closeAt: {
			type: Date,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const Recruitment = mongoose.models.recruitments || mongoose.model("recruitments", recruitmentSchema);
export default Recruitment;
