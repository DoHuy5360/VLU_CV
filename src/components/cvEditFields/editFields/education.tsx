import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { educationFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Education({ Wrapper, Input }: { Wrapper: WrapperUI; Input: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.education.classes",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Học vấn",
				prepend: () => {
					actions.prepend(educationFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Thời gian:'
							register={register(`attrs.education.classes.${i}.time`)}
							errors={errors.attrs?.education?.classes?.[i]?.time?.message}
							index={i}
						/>
						<Input
							label='Chuyên ngành:'
							register={register(`attrs.education.classes.${i}.major`)}
							errors={errors.attrs?.education?.classes?.[i]?.major?.message}
							index={i}
						/>
						<Input
							label='Trường:'
							register={register(`attrs.education.classes.${i}.school`)}
							errors={errors.attrs?.education?.classes?.[i]?.school?.message}
							index={i}
						/>
						<Input
							label='Trạng thái:'
							register={register(`attrs.education.classes.${i}.status`)}
							errors={errors.attrs?.education?.classes?.[i]?.status?.message}
							index={i}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
