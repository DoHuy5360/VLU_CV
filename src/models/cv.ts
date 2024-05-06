import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type CvSchemaType = {
	_id?: ObjectId;
	name: string;
	thumbnail: string;
};

const cvSchema = new mongoose.Schema({
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
