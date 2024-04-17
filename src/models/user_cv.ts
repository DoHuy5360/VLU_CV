import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userCvSchema = new Schema(
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

const User_CV =
	mongoose.models.user_cv || mongoose.model("user_cv", userCvSchema);
export default User_CV;
