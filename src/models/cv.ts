import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cvSchema = new Schema({
	name: {
		type: String,
		require: true,
		unique: true,
	},
	thumbnail: {
		type: String,
		require: true,
		unique: false,
	},
});

const CV = mongoose.models.CV || mongoose.model("CV", cvSchema);
export default CV;
