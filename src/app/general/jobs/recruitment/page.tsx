import Recruitment from "@/models/recruitment";
import { connectToDatabase } from "@/services/mongoosedb";
import Data from "./_component/data";

export default async function page() {
	await connectToDatabase();
	const recruitment = await Recruitment.find().populate("companyId").select("companyId requirement title createdAt");
	return (
		<div className='flex-grow overflow-y-hidden flex flex-col bg-slate-200'>
			<Data listOfRecruitment={JSON.stringify(recruitment)} />
		</div>
	);
}
