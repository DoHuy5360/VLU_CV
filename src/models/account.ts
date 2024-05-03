import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type AccountModelType = {
	_id?: ObjectId;
	email: string;
	password: string;
	role: "admin" | "candidate" | "recruiter";
	image: string;
};

const accountSchema = new Schema(
	{
		email: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
		role: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: false,
		},
	},
	{
		timestamps: true,
	}
);

const Account = mongoose.models.accounts || mongoose.model("accounts", accountSchema);
export default Account;
