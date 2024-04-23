import { useFormContext } from "react-hook-form";
import { UserDataForm } from "@/app/template/cv/[name]/_component/editCvForm";
import { InputUI, WrapperUI } from "./type";

export default function Other({
	Wrapper,
	Area,
}: {
	Wrapper: WrapperUI;
	Area: InputUI;
}) {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	return (
		<Wrapper.T04
			data={{
				label: "Other",
			}}
		>
			<Area
				register={register("attrs.other.content")}
				errors={errors.attrs?.other?.content?.message}
			/>
		</Wrapper.T04>
	);
}