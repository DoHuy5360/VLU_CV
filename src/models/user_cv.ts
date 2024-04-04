import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userCvSchema = new Schema({
	cvId: {
		type: ObjectId,
		require: true,
	},
	userId: {
		type: ObjectId,
		require: true,
	},
	name: {
		type: String,
		require: true,
		unique: true,
	},
	data: {
		type: Object,
		require: true,
		unique: false,
	},
});

const User_CV =
	mongoose.models.user_cv || mongoose.model("user_cv", userCvSchema);
export default User_CV;
