import { RecruiterDataForm } from "@/app/recruiter/_component/register";
import { connectToDatabase } from "@/libs/mongoosedb";

export async function createAccount(data: RecruiterDataForm) {
	await connectToDatabase();
}
