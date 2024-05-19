"use client";

import DialogProfileSelection from "@/components/view/editCV/dialogProfileSelection";
import EditCvView from "@/components/view/editCV/editCV";
import { useCreateCV } from "@/hooks/useCreateCV";
import { UserData } from "@/types/userData";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

export type CandidateProfileProps = {
	_id: string;
	accountId: string;
	name: string;
	data: UserData;
	default: string;
};

export default function PreHandler({ cvTemplateName, profiles }: { cvTemplateName: string; profiles: string }) {
	const handleSubmit = useCreateCV({ cvTemplateName });
	const listProfiles = useRef<CandidateProfileProps[]>(JSON.parse(profiles));
	const searchParams = useSearchParams();

	const profileIndex = searchParams.get("profile");
	const [currentProfileIndex, setCurrentProfileIndex] = useState<number | null>(profileIndex === null ? null : parseInt(profileIndex));
	const [isShowChangeProfileDialog, setShowChangeProfileDialog] = useState(profileIndex === null ? true : false);
	if (listProfiles.current.length === 1) return <EditCvView cvObjectData={listProfiles.current[0].data} listProfiles={listProfiles.current} onSubmit={handleSubmit} />;

	return (
		<>
			<DialogProfileSelection
				listProfiles={listProfiles.current}
				setCurrentProfileIndex={setCurrentProfileIndex}
				isShowChangeProfileDialog={isShowChangeProfileDialog}
				setShowChangeProfileDialog={setShowChangeProfileDialog}
			/>
			{currentProfileIndex !== null && <EditCvView cvObjectData={listProfiles.current[currentProfileIndex].data} listProfiles={listProfiles.current} onSubmit={handleSubmit} />}
		</>
	);
}
