import View from "@/app/candidate/applicant/_component/view";
import Applicant from "@/models/applicant";
import { connectToDatabase } from "@/services/mongoosedb";
import moment from "moment";

export default async function Page({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const applicants = await Applicant.find({
		recruitmentId: params.id,
	})
		.populate("candidateId")
		.populate("recruitmentId")
		.populate("candidateCvId");
	return (
		<div>
			<div className=''>
				<div className='grid grid-cols-[50px_auto_150px_150px] bg-slate-200 p-2'>
					<div>#</div>
					<div>Họ tên ứng viên</div>
					<div>Ngày ứng tuyển</div>
					<div>Thao tác</div>
				</div>
				{applicants.map((e, i) => {
					return (
						<div key={i} className='grid grid-cols-[50px_auto_150px_150px] p-2'>
							<div>{i + 1}</div>
							<div>{e.candidateId.name}</div>
							<div>{moment(e.createdAt).format("DD/MM/YYYY")}</div>
							<View data={JSON.stringify(e)} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
