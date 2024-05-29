"use client";
import { CandidateProfileProps } from "@/app/template/cv/[name]/_component/preHandler";
import { Buttons } from "@/components/button/buttons";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function DialogProfileSelection({
	listProfiles,
	setCurrentProfileIndex,
	isShowChangeProfileDialog,
	setShowChangeProfileDialog,
}: {
	listProfiles: CandidateProfileProps[];
	isShowChangeProfileDialog: boolean;
	setShowChangeProfileDialog: Function;
	setCurrentProfileIndex: Function;
}) {
	const setFootprint = useCallback((tab: string | number) => {
		const queryParams = new URLSearchParams(window.location.search);
		queryParams.set("profile", JSON.stringify(tab));
		window.history.replaceState(null, "", `?${queryParams.toString()}`);
	}, []);
	const searchParams = useSearchParams();
	const profileIndex = searchParams.get("profile");
	return (
		<div className={`${isShowChangeProfileDialog ? "" : "hidden"} z-50 grid place-items-center w-full h-full absolute bg-white select-none`}>
			<div className='flex flex-col items-center border-[1px]'>
				<div className='flex items-center justify-between border-b-[1px] w-full text-center p-2 gap-2'>
					<div>Chọn hồ sơ bạn muốn áp dụng?</div>
					{profileIndex !== null && (
						<div
							onClick={() => {
								setShowChangeProfileDialog(false);
							}}
						>
							<Buttons.Delete.Click.Icon />
						</div>
					)}
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
							>
								<Buttons.Solid.Gray.Click text={profile.name} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
