import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const candidatePortfolioSchema = new Schema(
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

const Candidate_Portfolio = mongoose.models.candidate_portfolios || mongoose.model("candidate_portfolios", candidatePortfolioSchema);
export default Candidate_Portfolio;
