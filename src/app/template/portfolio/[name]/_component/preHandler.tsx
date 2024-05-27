"use client";

import DialogProfileSelection from "@/components/view/editPortfolio/dialogProfileSelection";
import EditCvView from "@/components/view/editPortfolio/editCV";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { useCreateCV } from "@/hooks/useCreateCV";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export type CandidateProfileProps = {
	_id: string;
	accountId: string;
	name: string;
	data: PortfolioFormData;
	default: string;
};

export default function PreHandler({ cvTemplateName, profiles }: { cvTemplateName: string; profiles: string }) {
	const handleSubmit = async (data: PortfolioFormData) => {
		console.log(data);
		// const isSuccess = await createReplica(cvTemplateName, data);
		// isSuccess ? alert("Tạo CV thành công") : alert("Tạo CV thất bại - Vui lòng kiểm tra lại tên CV");
	};
	const listProfiles = useRef<CandidateProfileProps[]>(JSON.parse(profiles));
	const searchParams = useSearchParams();

	const profileIndex = searchParams.get("profile");
	const [currentProfileIndex, setCurrentProfileIndex] = useState<number | null>(profileIndex === null ? null : parseInt(profileIndex));
	const [isShowChangeProfileDialog, setShowChangeProfileDialog] = useState(profileIndex === null ? true : false);
	if (listProfiles.current.length === 1) return <EditCvView cvTemplateName={cvTemplateName} cvObjectData={listProfiles.current[0].data} listProfiles={listProfiles.current} onSubmit={handleSubmit} />;

	return (
		<>
			<DialogProfileSelection
				listProfiles={listProfiles.current}
				setCurrentProfileIndex={setCurrentProfileIndex}
				isShowChangeProfileDialog={isShowChangeProfileDialog}
				setShowChangeProfileDialog={setShowChangeProfileDialog}
			/>
			{currentProfileIndex !== null && (
				<EditCvView cvTemplateName={cvTemplateName} cvObjectData={listProfiles.current[currentProfileIndex].data} listProfiles={listProfiles.current} onSubmit={handleSubmit} />
			)}
		</>
	);
}
