"use client";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlineClear } from "react-icons/ai";
import DeleteProfile from "./deleteProfile";
import CreateProfile from "./createProfile";
import { Buttons } from "@/components/button/buttons";

export type ProfileProps = {
	_id: string;
	name: string;
	default: boolean;
	type: "cv" | "portfolio";
	createdAt: string;
};

export default function ListProfiles({ profilesRaw }: { profilesRaw: string }) {
	const arrProfiles: ProfileProps[] = JSON.parse(profilesRaw);
	const [profiles, setCVs] = useState<ProfileProps[]>(arrProfiles);
	const [dateCreated, setDateCreated] = useState<string>("");
	const [findingCvName, setFindingCvName] = useState("");
	useEffect(() => {
		setCVs(arrProfiles);
	}, [profilesRaw, arrProfiles]);
	useEffect(() => {
		if (findingCvName === "") {
			setCVs(arrProfiles);
		} else {
			const regex = new RegExp([...findingCvName].join(".*"), "i");
			const cvsFiltered = arrProfiles.filter((cv) => {
				return regex.test(cv.name) && cv;
			});
			setCVs(cvsFiltered);
		}
	}, [findingCvName, arrProfiles]);
	useEffect(() => {
		if (dateCreated === "") {
			setCVs(arrProfiles);
		} else {
			const cvsFiltered = arrProfiles.filter((cv) => {
				return dateCreated === cv.createdAt.split("T")[0] && cv;
			});
			setCVs(cvsFiltered);
		}
	}, [dateCreated, arrProfiles]);
	const [isShowCreateProfileDialog, setShowCreateProfileDialog] = useState(false);
	return (
		<div className='flex-grow text-sm flex flex-col h-full relative'>
			<div className='flex justify-end m-1'>
				<div
					onClick={() => {
						setShowCreateProfileDialog(true);
					}}
				>
					<Buttons.Create.TextIcon />
				</div>
				<div className={`${isShowCreateProfileDialog ? "" : "hidden"}`}>
					<CreateProfile setShowCreateProfileDialog={setShowCreateProfileDialog} />
				</div>
			</div>
			<div className='grid grid-cols-[50px_1fr_100px_250px_100px] items-center bg-orange-400 text-white'>
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
				<div className='text-center'>Loại hồ sơ</div>
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
			{profiles.map((profile: ProfileProps, index: number) => (
				<div key={profile._id} className='grid grid-cols-[50px_1fr_100px_250px_100px] items-center hover:bg-slate-100'>
					<div className='p-2 text-center'>{index + 1}</div>
					<Link className='p-2 underline hover:text-blue-500 whitespace-nowrap' href={`/candidate/profile/${profile._id}`}>
						<div
							dangerouslySetInnerHTML={{
								__html: profile.name,
							}}
						></div>
					</Link>
					<div className='text-center'>{profile.type}</div>
					<div className='p-2 whitespace-nowrap text-center'>{moment(profile.createdAt).format("DD-MM-YYYY / HH:mm")}</div>
					{profile.default === false && (
						<div className='flex gap-2 align-bottom'>
							<DeleteProfile _id={profile._id} name={profile.name} />
						</div>
					)}
				</div>
			))}
		</div>
	);
}
