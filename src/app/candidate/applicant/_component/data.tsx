"use client";
import moment from "moment";
import Delete from "./delete";
import View from "./view";
import { RecruitmentSchemaType } from "@/models/recruitment";
import { CandidateCVModelType } from "@/models/candidate_cv";
import { useEffect, useState } from "react";

type DataApplicant = {
	_id: string;
	candidateId: string;
	recruitmentId: RecruitmentSchemaType;
	candidateCvId: CandidateCVModelType;
	message: string;
	isDeleted: boolean;
	createdAt: string;
};

export default function Data({ listOfApplicants }: { listOfApplicants: string }) {
	const applicants: DataApplicant[] = JSON.parse(listOfApplicants);

	const [records, setRecords] = useState<DataApplicant[]>(applicants);

	const [findingName, setFindingName] = useState("");
	const [filterByStatus, setFilterByStatus] = useState("all");
	const [dateCreated, setDateCreated] = useState<string>("");

	useEffect(() => {
		if (findingName === "") {
			setRecords(applicants);
		} else {
			const regex = new RegExp([...findingName].join(".*"), "i");
			const filtered = applicants.filter((e) => {
				return regex.test(e.recruitmentId.title) && e;
			});
			setRecords(filtered);
		}
	}, [findingName]);

	useEffect(() => {
		if (filterByStatus === "all") {
			setRecords(applicants);
		} else {
			let filtered;
			if (filterByStatus == "opening") {
				filtered = applicants.filter((e) => {
					return !e.recruitmentId.isClose;
				});
			} else {
				filtered = applicants.filter((e) => {
					return e.recruitmentId.isClose;
				});
			}
			setRecords(filtered);
		}
	}, [filterByStatus]);
	useEffect(() => {
		if (dateCreated === "") {
			setRecords(applicants);
		} else {
			const cvsFiltered = applicants.filter((e) => {
				return dateCreated === e.createdAt.split("T")[0];
			});
			setRecords(cvsFiltered);
		}
	}, [dateCreated]);
	return (
		<div className='flex flex-col'>
			<div className='grid grid-cols-[50px_auto_150px_150px] sticky top-0 bg-slate-200'>
				<div></div>
				<div className='p-2 flex gap-2'>
					<input
						onChange={(e) => {
							setFindingName(e.target.value);
						}}
						value={findingName}
						className='round-sm px-1 text-black text-sm'
						type='text'
						placeholder='Tìm kiếm theo tên'
					/>
					<select
						onChange={(e) => {
							setFilterByStatus(e.target.value);
						}}
					>
						<option value='all' selected>
							Tất cả
						</option>
						<option value='opening'>Đang mở</option>
						<option value='closed'>Đã đóng</option>
					</select>
					<input
						onChange={(e) => {
							setDateCreated(e.target.value);
						}}
						type='date'
						className='text-black px-1 cursor-pointer'
						value={dateCreated}
					/>
				</div>
			</div>
			{records.map((e, i) => {
				return (
					<div key={i} className='grid grid-cols-[50px_auto_150px_150px] items-center hover:bg-slate-100 bg-white border-[1px] rounded-sm'>
						<div className='text-center'>{i + 1}</div>
						<div className='p-2 border-l-[1px]'>
							<div className='text-sm'>{e.recruitmentId.title}</div>
							<div className='text-xs flex gap-2'>Trạng thái: {e.recruitmentId.isClose ? <div className='text-red-400'>Đã đóng</div> : <div className='text-green-400'>Còn mở</div>}</div>
						</div>
						<div className='flex justify-center gap-2'>
							<View data={JSON.stringify(e)} />
							<Delete applicantId={e._id.toString()} />
						</div>
						<div className='text-sm text-center'>{moment(e.createdAt).format("DD-MM-YYYY")}</div>
					</div>
				);
			})}
		</div>
	);
}
