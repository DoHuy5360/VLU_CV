"use client";
import { updateCV } from "@/actions/candidate/updateCV";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import EditCvView from "@/components/view/editCV/editCV";

export default function PreHandler({ id, cvObjectData }: { id: string; cvObjectData: UserDataForm }) {
	const handleSubmit = async (data: UserDataForm) => {
		const isSuccess = await updateCV({ id, data });
		isSuccess ? alert("Cập nhật thành công") : alert("Cập nhật thất bại");
	};
	return <EditCvView cvTemplateName={cvObjectData.name} listProfiles={[]} cvObjectData={cvObjectData} onSubmit={handleSubmit} />;
}
