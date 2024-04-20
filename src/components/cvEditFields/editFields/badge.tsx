import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../../app/template/cv/[name]/_component/editCvForm";
import { badgeFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Badge({
	Wrapper,
	Input,
}: {
	Wrapper: WrapperUI;
	Input: InputUI;
}) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.badge.achievements",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Badge",
				prepend: () => {
					actions.prepend(badgeFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Name:'
							register={register(
								`attrs.badge.achievements.${i}.name`
							)}
							errors={
								errors.attrs?.badge?.achievements?.[i]?.name?.message
							}
							index={i}
						/>
						<Input
							label='Time:'
							register={register(
								`attrs.badge.achievements.${i}.time`
							)}
							errors={
								errors.attrs?.badge?.achievements?.[i]?.time?.message
							}
							index={i}
						/>
						<Input
							label='Where:'
							register={register(
								`attrs.badge.achievements.${i}.where`
							)}
							errors={
								errors.attrs?.badge?.achievements?.[i]?.where?.message
							}
							index={i}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
