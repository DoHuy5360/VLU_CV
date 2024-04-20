import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../../app/template/cv/[name]/_component/editCvForm";
import { skillFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Skill({
	Wrapper,
	Input,
	Area,
}: {
	Wrapper: WrapperUI;
	Input: InputUI;
	Area: InputUI;
}) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.skill.skills",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Skill",
				prepend: () => {
					actions.prepend(skillFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Name:'
							index={i}
							register={register(`attrs.skill.skills.${i}.name`)}
							errors={errors.attrs?.skill?.skills?.[i]?.name?.message}
						/>
						<Area
							label='Status:'
							index={i}
							register={register(`attrs.skill.skills.${i}.status`)}
							errors={
								errors.attrs?.skill?.skills?.[i]?.status?.message
							}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
