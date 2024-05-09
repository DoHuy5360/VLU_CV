"use client";
import Link from "next/link";
import { RxEyeClosed } from "react-icons/rx";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import DeleteProfile from "./deleteProfile";
import CreateProfile from "./cerateProfile";

export type ProfileProps = {
	_id: string;
	name: string;
	default: boolean;
	createdAt: string;
};

export default function ListProfiles({ profiles }: { profiles: string }) {
	const arrProfiles = useRef<ProfileProps[]>(JSON.parse(profiles));
	const [cvs, setCVs] = useState<ProfileProps[]>(arrProfiles.current);
	const [dateCreated, setDateCreated] = useState<string>("");
	const [findingCvName, setFindingCvName] = useState("");
	useEffect(() => {
		if (findingCvName === "") {
			setCVs(arrProfiles.current);
		} else {
			const regex = new RegExp([...findingCvName].join(".*"), "i");
			const cvsFiltered = arrProfiles.current.filter((cv) => {
				return regex.test(cv.name) && cv;
			});
			setCVs(cvsFiltered);
		}
	}, [findingCvName]);
	useEffect(() => {
		if (dateCreated === "") {
			setCVs(arrProfiles.current);
		} else {
			const cvsFiltered = arrProfiles.current.filter((cv) => {
				return dateCreated === cv.createdAt.split("T")[0] && cv;
			});
			setCVs(cvsFiltered);
		}
	}, [dateCreated]);
	return (
		<div className='flex-grow text-sm flex flex-col h-full'>
			<div className='flex justify-end m-1'>
				<CreateProfile />
			</div>
			<div className='grid grid-cols-[50px_1fr_250px_100px] items-center bg-orange-400 text-white'>
				<div className='p-2 text-center'>#</div>
				<div className='p-2 flex items-center gap-1'>
					<div>Tên</div>
					<div className='flex bg-white items-center gap-1'>
						<input
							onChange={(e) => {
								setFindingCvName(e.target.value);
							}}
							value={findingCvName}
							className='round-sm px-1 text-black text-sm'
							type='text'
						/>
						<div
							onClick={() => {
								setFindingCvName("");
							}}
							className='text-orange-400 hover:text-orange-600 cursor-pointer px-1'
						>
							<AiOutlineClear />
						</div>
					</div>
				</div>
				<div className='flex gap-1 items-center p-2'>
					<div>Tạo lúc</div>
					<div className='flex bg-white items-center'>
						<input
							onChange={(e) => {
								setDateCreated(e.target.value);
							}}
							type='date'
							className='text-black px-1 cursor-pointer'
							value={dateCreated}
						/>
						<div
							onClick={() => {
								setDateCreated("");
							}}
							className='text-orange-400 hover:text-orange-600 cursor-pointer px-1'
						>
							<AiOutlineClear />
						</div>
					</div>
				</div>
				<div className='p-2'>Thao tác</div>
			</div>
			{JSON.parse(profiles).map((cv: ProfileProps, index: number) => (
				<div key={cv._id} id={cv._id.toString()} className='grid grid-cols-[50px_1fr_250px_100px] items-center hover:bg-slate-100'>
					<div className='p-2 text-center'>{index + 1}</div>
					<Link className='p-2 underline hover:text-blue-500 whitespace-nowrap' href={`/candidate/profile/${cv._id}`}>
						<div
							dangerouslySetInnerHTML={{
								__html: cv.name,
							}}
						></div>
					</Link>
					<div className='p-2 whitespace-nowrap text-center'>{moment(cv.createdAt).format("DD-MM-YYYY / HH:mm")}</div>
					{cv.default === false && (
						<div className='flex gap-2 align-bottom'>
							<div className='p-2 cursor-pointer hover:bg-slate-300'>
								<RxEyeClosed />
								{/* <RxEyeOpen /> */}
							</div>
							<DeleteProfile _id={cv._id} name={cv.name} />
						</div>
					)}
				</div>
			))}
		</div>
	);
}
