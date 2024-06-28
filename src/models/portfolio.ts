import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type PortfolioSchemaType = {
	_id?: ObjectId;
	name: string;
	thumbnail: string;
};

const portfolioSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: true,
	}
);

const Portfolio = mongoose.models.portfolios || mongoose.model("portfolios", portfolioSchema);
export default Portfolio;
