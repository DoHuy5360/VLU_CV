"use client";

import { useContext } from "react";
import { CvContext } from "@/contexts/cvProvider";
import EditCvView from "@/components/view/editCV/editCV";
import { createReplica } from "@/actions/candidate/createReplica";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";

function EditTemplate({ params }: { params: { name: string } }) {
	const { state } = useContext(CvContext);

	if (state === null) return <div>Loading...</div>;

	const handleSubmit = async (data: UserDataForm) => {
		const isSuccess = await createReplica(params.name, data);
		isSuccess ? alert("Tạo CV thành công") : alert("Tạo CV thất bại - Vui lòng kiểm tra lại tên CV");
	};

	return <EditCvView cvObjectData={state} cvTemplateName={params.name} onSubmit={handleSubmit} />;
}

export default EditTemplate;
