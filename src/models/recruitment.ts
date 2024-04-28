import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recruitmentSchema = new Schema({
	recruiterId: {
		type: ObjectId,
		ref: "recruiterSchema",
		require: true,
	},
	vector: {
		type: Array<Number>,
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
	responsibilities: {
		type: String,
		require: true,
	},
	requires: {
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
	yearExp: {
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
	startAt: {
		type: Date,
		require: true,
	},
	closeAt: {
		type: Date,
		require: true,
	},
	isClose: {
		type: Boolean,
		require: true,
		default: false,
	},
});

const Recruitment = mongoose.models.recruitments || mongoose.model("recruitments", recruitmentSchema);
export default Recruitment;
