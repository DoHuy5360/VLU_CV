import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type TemplateSchemaType = {
	_id?: ObjectId;
	name: string;
	thumbnail: string;
	type: "cv" | "portfolio";
};

const templateSchema = new mongoose.Schema({
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
    type: {
        type: String,
        require: true
    }
});

const Template = mongoose.models.templates || mongoose.model("templates", templateSchema);
export default Template;
