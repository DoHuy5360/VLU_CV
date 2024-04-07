import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({}, { strict: false });

const User =
	mongoose.models.users || mongoose.model("users", userSchema);
export default User;
