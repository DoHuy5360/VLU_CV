import mongoose from "mongoose";

const Schema = mongoose.Schema;

const companySchema = new Schema(
	{
		name: {
			type: String,
			require: true,
		},
		convince: {
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
