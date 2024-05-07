import A01Template from "@/components/layouts/templates/a01Template";
import A02Template from "@/components/layouts/templates/a02Template";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";

export interface TransferType {
	[key: string]: (data: UserDataForm) => JSX.Element;
}
export const Transfer: TransferType = {
	A01TEMPLATE: A01Template,
	A02TEMPLATE: A02Template,
	A03TEMPLATE: A01Template,
	A04TEMPLATE: A02Template,
};
