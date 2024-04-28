import { useFormContext } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { InputUI, WrapperUI } from "./type";

export default function Other({ Wrapper, Area }: { Wrapper: WrapperUI; Area: InputUI }) {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	return (
		<Wrapper.T04
			data={{
				label: "Thông tin khác",
			}}
		>
			<Area register={register("attrs.other.content")} errors={errors.attrs?.other?.content?.message} />
		</Wrapper.T04>
	);
}
