"use client";
import { updateCV } from "@/actions/candidate/updateCV";
import { updatePortfolio } from "@/actions/candidate/updatePortfolio";
import EditCvView from "@/components/view/editPortfolio/editCV";
import { PortfolioFormData } from "@/entities/getDataPortfolio";

export default function PreHandler({ id, cvObjectData }: { id: string; cvObjectData: PortfolioFormData }) {
	const handleSubmit = async (data: PortfolioFormData) => {
		const isSuccess = await updatePortfolio({ id, data });
		isSuccess ? alert("Cập nhật thành công") : alert("Cập nhật thất bại");
	};
	return <EditCvView cvTemplateName={cvObjectData.template} listProfiles={[]} cvObjectData={cvObjectData} onSubmit={handleSubmit} />;
}
