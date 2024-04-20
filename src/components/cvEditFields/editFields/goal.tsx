import { useFormContext } from "react-hook-form";
import { UserDataForm } from "@/app/template/cv/[name]/_component/editCvForm";
import { InputUI, WrapperUI } from "./type";

export default function Goal({
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
				label: "Goal",
			}}
		>
			<Area
				register={register("attrs.goal.content")}
				errors={errors.attrs?.goal?.content?.message}
			/>
		</Wrapper.T04>
	);
}
