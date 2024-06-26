import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import GrayLink from "@/components/button/grayLink";
import { getServerSession } from "next-auth";

export default async function layout({ children }: { children: JSX.Element }) {
	const session = await getServerSession(authOptions);
	return (
		<div className='h-dvh flex flex-col'>
			<div className='p-2 border-b-[1px]'>
				{session?.user.role === "candidate" && <GrayLink href='/candidate/applicant' text='Danh sách ứng tuyển của tôi' />}
				<GrayLink href='/general/jobs/recruitment' text='Danh sách tuyển dụng' />
			</div>
			{children}
		</div>
	);
}
