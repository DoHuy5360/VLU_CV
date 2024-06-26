import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export type CompanyDataModel = {
	_id?: ObjectId;
	name: string;
	province: string;
	district: string;
};

const companySchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		province: {
			type: String,
			require: true,
		},
		district: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);

const Company = mongoose.models.companies || mongoose.model("companies", companySchema);
export default Company;
