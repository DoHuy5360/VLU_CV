import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type NewsSchemaType = {
	_id?: ObjectId;
	name: string;
	thumbnail: string;
};

const newsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		thumbnail: {
			type: String,
			require: true,
		},
		content: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const News = mongoose.models.news || mongoose.model("news", newsSchema);
export default News;
