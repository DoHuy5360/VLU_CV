import { createReplica } from "@/actions/candidate/createReplica";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";

export const useCreateCV = ({ cvTemplateName }: { cvTemplateName: string }) => {
	const handleSubmit = async (data: UserDataForm) => {
		const isSuccess = await createReplica(cvTemplateName, data);
		isSuccess ? alert("Tạo CV thành công") : alert("Tạo CV thất bại - Vui lòng kiểm tra lại tên CV");
	};
	return handleSubmit;
};
