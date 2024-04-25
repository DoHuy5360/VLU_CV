import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { experienceFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Experience({ Wrapper, Input, Area }: { Wrapper: WrapperUI; Input: InputUI; Area: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.experience.works",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Experience",
				prepend: () => {
					actions.prepend(experienceFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Name:'
							errors={errors.attrs?.experience?.works?.[i]?.name?.message}
							register={register(`attrs.experience.works.${i}.name`)}
							index={i}
						/>

						<Input
							label='Time:'
							register={register(`attrs.experience.works.${i}.time`)}
							errors={errors.attrs?.experience?.works?.[i]?.time?.message}
							index={i}
						/>
						<Input
							label='Position:'
							register={register(`attrs.experience.works.${i}.position`)}
							errors={errors.attrs?.experience?.works?.[i]?.position?.message}
							index={i}
						/>
						<Area
							label='Tasks:'
							register={register(`attrs.experience.works.${i}.tasks`)}
							errors={errors.attrs?.experience?.works?.[i]?.tasks?.message}
							index={i}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
