import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: false,
		},
		role: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: false,
		},
		dataCV: {
			type: Object,
			require: false,
		},
	},
	{
		timestamps: true,
	}
);

const User =
	mongoose.models.users || mongoose.model("users", userSchema);
export default User;
