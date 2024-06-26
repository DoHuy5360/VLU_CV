import Recruitment from "@/models/recruitment";
import { connectToDatabase } from "@/services/mongoosedb";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
	await connectToDatabase();
	const recruitment = await Recruitment.find().populate("companyId").select("companyId requirement title");
	return (
		<div className='flex-grow overflow-y-scroll'>
			{/* <div className='h-[200px] bg-slate-200'>
				<div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div> */}
			<div className='grid grid-cols-2 gap-4 w-9/12 mx-auto p-2 bg-slate-100 mt-10'>
				{recruitment.map((e, i) => {
					return (
						<Link href={`/general/jobs/recruitment/${e._id}`}>
							<div key={i} className='h-full rounded grid grid-cols-[40px_auto] border-[1px] hover:bg-slate-50 bg-white select-none cursor-pointer py-2 gap-2 items-center p-2'>
								<Image src='/image/user.jpg' width={40} height={40} className='p-2' alt='user avatar' />
								<div className='flex flex-col gap-1'>
									<div className='text-sm whitespace-nowrap font-bold'>{e.companyId.name}</div>
									<div className='text-xs whitespace-break-spaces p-1 rounded-lg w-fit bg-slate-200'>{e.title}</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
