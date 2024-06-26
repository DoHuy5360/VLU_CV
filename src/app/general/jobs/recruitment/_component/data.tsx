"use client";

import { CompanyDataModel } from "@/models/company";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";

type DataRecord = {
	_id: string;
	companyId: CompanyDataModel;
	requirement: string;
	title: string;
	createdAt: string;
	salary: string;
};

export default function Data({ listOfRecruitment }: { listOfRecruitment: string }) {
	const recruitment: DataRecord[] = JSON.parse(listOfRecruitment);

	const [records, setRecords] = useState<DataRecord[]>(recruitment);

	const [findingName, setFindingName] = useState("");
	const [dateCreated, setDateCreated] = useState<string>("");

	useEffect(() => {
		if (findingName === "") {
			setRecords(recruitment);
		} else {
			const regex = new RegExp([...findingName].join(".*"), "i");
			const filtered = recruitment.filter((e) => {
				return regex.test(e.companyId.name) && e;
			});
			setRecords(filtered);
		}
	}, [findingName]);

	useEffect(() => {
		if (dateCreated === "") {
			setRecords(recruitment);
		} else {
			const cvsFiltered = recruitment.filter((e) => {
				return dateCreated === e.createdAt.split("T")[0];
			});
			setRecords(cvsFiltered);
		}
	}, [dateCreated]);

	return (
		<div className='flex flex-col w-9/12 flex-grow mx-auto'>
			<div className='flex-gro-1 p-2 flex gap-2'>
				<input
					onChange={(e) => {
						setFindingName(e.target.value);
					}}
					value={findingName}
					className='round-sm px-1 text-black text-sm'
					type='text'
					placeholder='Tìm kiếm theo tên'
				/>
				<input
					onChange={(e) => {
						setDateCreated(e.target.value);
					}}
					type='date'
					className='text-black px-1 cursor-pointer'
					value={dateCreated}
				/>
			</div>
			<div className='flex-grow basis-11 overflow-y-hidden pb-2'>
				<div className='overflow-y-scroll flex pb-2 flex-col rounded-lg gap-2 mx-auto bg-slate-100 h-full'>
					<div className='grid grid-cols-[40px_auto_150px] h-fit sticky top-0 bg-white border-b-[1px] p-2'>
						<div></div>
						<div></div>
						<div className='text-sm text-center'>Ngày đăng tuyển</div>
					</div>
					<div className='flex flex-col gap-2'>
						{records.map((e, i) => {
							const postDay = moment(e.createdAt);
							const toDay = moment();
							const gapDay = toDay.diff(postDay, "days");
							return (
								<Link key={i} href={`/general/jobs/recruitment/${e._id}`}>
									<div className='h-fit mx-2 rounded grid grid-cols-[40px_auto_150px] border-[1px] hover:bg-slate-50 bg-white select-none cursor-pointer py-2 gap-2 items-center p-2'>
										<Image src='/image/user.jpg' width={40} height={40} className='p-2' alt='user avatar' />
										<div className='flex flex-col gap-1'>
											<div className='flex gap-2 items-baseline'>
												<div className='whitespace-nowrap font-bold'>{e.companyId.name}</div>
												<div className='flex gap-1 text-xs'>
													<div>{e.companyId.province}</div>
													<div>-</div>
													<div>{e.companyId.district}</div>
												</div>
											</div>
											<div className='text-xs whitespace-break-spaces p-1 rounded-lg w-fit bg-slate-200'>{e.title}</div>
											<div className='text-sm flex gap-1 items-center'>
												<div className='text-green-500'>
													<BiDollar />
												</div>
												<div>{e.salary}</div>
											</div>
										</div>
										<div className='text-sm text-center flex flex-col items-center gap-1'>
											<div>{postDay.format("DD-MM-YYYY")}</div>
											<div className='bg-slate-100 rounded-sm p-1 w-fit'>{gapDay} ngày trước</div>
										</div>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
