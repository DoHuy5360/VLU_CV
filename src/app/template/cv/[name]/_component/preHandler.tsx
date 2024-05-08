"use client";

import { createReplica } from "@/actions/candidate/createReplica";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import EditCvView from "@/components/view/editCV/editCV";
import { UserData } from "@/types/userData";

export default function PreHandler({ cvTemplateName, cvObjectData }: { cvTemplateName: string; cvObjectData: UserData }) {
	const handleSubmit = async (data: UserDataForm) => {
		const isSuccess = await createReplica(cvTemplateName, data);
		isSuccess ? alert("Tạo CV thành công") : alert("Tạo CV thất bại - Vui lòng kiểm tra lại tên CV");
	};
	return <EditCvView cvObjectData={cvObjectData} onSubmit={handleSubmit} cvTemplateName={cvTemplateName} />;
}
