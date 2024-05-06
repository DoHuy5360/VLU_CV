import { UseFieldArrayReturn, useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { skillFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Skill({ Wrapper, Input, Area }: { Wrapper: WrapperUI; Input: InputUI; Area: InputUI }) {
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
				label: "Kỹ năng",
				prepend: () => {
					actions.prepend(skillFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} index={i} length={actions.fields.length} />
						<Input label='Tên:' index={i} register={register(`attrs.skill.skills.${i}.name`)} errors={errors.attrs?.skill?.skills?.[i]?.name?.message} />
						<Area label='Mô tả:' index={i} register={register(`attrs.skill.skills.${i}.status`)} errors={errors.attrs?.skill?.skills?.[i]?.status?.message} />
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
