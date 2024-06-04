import A01Template from "@/components/layouts/templates/a01Template";
import A02Template from "@/components/layouts/templates/a02Template";
import A03Template from "@/components/layouts/templates/a03template";
import A04Template from "@/components/layouts/templates/a04template";
import B01Template from "@/components/layouts/templates/b01Template";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { PortfolioFormData } from "@/entities/getDataPortfolio";

export interface TransferType {
	[key: string]: (data: any) => JSX.Element;
}
export const Transfer: TransferType = {
	A01TEMPLATE: A01Template,
	A02TEMPLATE: A02Template,
	A03TEMPLATE: A03Template,
	A04TEMPLATE: A04Template,
	B01TEMPLATE: B01Template,
};
