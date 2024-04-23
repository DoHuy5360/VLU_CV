import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";
import Recruiter, { RecruiterModelType } from "@/models/recruiter";

export async function POST(req: Request) {
	await connectToDatabase();
	try {
		const { email, password } = await req.json();
		const accountFound: AccountModelType | null = await Account.findOne({ email });
		if (accountFound !== null) {
			switch (accountFound.role) {
				case "recruiter":
					const recruiterFound: RecruiterModelType | null = await Recruiter.findOne({ accountId: accountFound._id });
					if (recruiterFound !== null) {
						return Response.json({
							_id: recruiterFound._id,
							id: recruiterFound._id,
							name: recruiterFound.name,
							email: accountFound.email,
							role: accountFound.role,
							image: accountFound.image,
						});
					}
				default:
					return Response.json({ error: true, message: "[Error][Login] -> (User profile not found)" });
			}
		} else {
			return Response.json({ error: true, message: "[Error][Login] -> (Account not found)" });
		}
	} catch (error) {
		console.log(error);
		return Response.json({ error: "Error" });
	}
}
