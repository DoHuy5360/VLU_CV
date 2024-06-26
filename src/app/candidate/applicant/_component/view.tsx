"use client";
import { Buttons } from "@/components/button/buttons";
import RecruitmentTemplate from "@/components/view/editRecruitment/_component/recruitmentTemplate";
import { Transfer } from "@/types/tranfer";
import { useRef, useState } from "react";
import { BsEye } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

export default function View({ data }: { data: string }) {
	const dataRef = useRef(JSON.parse(data));
	const [isShowDetail, setShowDetail] = useState(false);
	return (
		<div>
			<div className={`${isShowDetail ? "fixed" : "hidden"} top-0 left-0 h-dvh w-full bg-white flex`}>
				<div className='flex-grow basis-6/12 overflow-y-scroll'>
					<RecruitmentTemplate data={dataRef.current.recruitmentId} />
				</div>
				<div className='flex flex-col flex-grow basis-6/12'>
					<div className='p-2 flex justify-end'>
						<div
							onClick={() => {
								setShowDetail(false);
							}}
						>
							<Buttons.Close.Icon />
						</div>
					</div>
					<div className='flex-grow pb-20 pt-5 overflow-y-scroll bg-slate-200'>
						<div id='cvWrapper' className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-3/4 shadow-lg'>
							{Transfer[dataRef.current.candidateCvId.template](dataRef.current.candidateCvId.data)}
						</div>
					</div>
					<div className='p-2 flex flex-col gap-2'>
						<label htmlFor='' className='font-bold'>
							Lời ngỏ
						</label>
						<textarea className='h-20 max-h-20 resize-none border-[1px] p-1' defaultValue={dataRef.current.message} disabled></textarea>
					</div>
				</div>
			</div>
			<div
				onClick={() => {
					setShowDetail(true);
				}}
				className='text-red-400 cursor-pointer hover:bg-red-300 p-2 hover:text-white rounded-full'
			>
				<BsEye />
			</div>
		</div>
	);
}
