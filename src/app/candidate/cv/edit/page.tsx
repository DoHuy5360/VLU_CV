"use client";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import EditCvView from "@/components/view/editCV/editCV";
import { CvEditContext } from "@/contexts/cvEditProvider";
import { useContext } from "react";

export default () => {
	const { cvOjectData } = useContext(CvEditContext);
	if (cvOjectData === null) return <div>Loading...</div>;

	const handleSubmit = async (data: UserDataForm) => {};
	try {
		return (
			<div>
				<EditCvView cvObjectData={cvOjectData} cvTemplateName={cvOjectData.template} onSubmit={handleSubmit} />
			</div>
		);
	} catch (error) {
		return <div>Không tìm thấy CV</div>;
	}
};
