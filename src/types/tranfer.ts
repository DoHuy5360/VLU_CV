import A01Template from "@/components/layouts/templates/a01Template";
import A02Template from "@/components/layouts/templates/a02Template";
import { UserData } from "./userData";

interface TransferType {
	[key: string]: (data: UserData) => JSX.Element;
}
export const Transfer: TransferType = {
	A01Template: A01Template,
	A02Template: A02Template,
};
