"use client";
import { CandidateProfileProps } from "@/app/template/cv/[name]/_component/preHandler";
import { useCallback } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function DialogProfileSelection({
	listProfiles,
	setCurrentProfileIndex,
	isShowChangeProfileDialog,
	setShowChangeProfileDialog,
}: {
	isShowChangeProfileDialog: boolean;
	setShowChangeProfileDialog: Function;
	listProfiles: CandidateProfileProps[];
	setCurrentProfileIndex: Function;
}) {
	const setFootprint = useCallback((tab: string | number) => {
		const queryParams = new URLSearchParams(window.location.search);
		queryParams.set("profile", JSON.stringify(tab));
		window.history.replaceState(null, "", `?${queryParams.toString()}`);
	}, []);
	return (
		<div className={`${isShowChangeProfileDialog ? "" : "hidden"} z-10 grid place-items-center w-full h-full absolute bg-white select-none`}>
			<div className='flex flex-col items-center border-[1px]'>
				<div
					onClick={() => {
						setShowChangeProfileDialog(false);
					}}
					className='flex items-center justify-between border-b-[1px] w-full text-center p-2'
				>
					<div>Chọn hồ sơ bạn muốn áp dụng?</div>
					<div className='p-2 cursor-pointer hover:bg-orange-300 active:bg-orange-400'>
						<IoCloseOutline />
					</div>
				</div>
				<div className='flex gap-1 p-2'>
					{listProfiles.map((profile, i) => {
						return (
							<div
								key={i}
								onClick={() => {
									setCurrentProfileIndex(i);
									setFootprint(i);
									setShowChangeProfileDialog(false);
								}}
								className='p-2 cursor-pointer bg-slate-100 hover:bg-slate-200 active:bg-slate-100'
							>
								<div>{profile.name}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
