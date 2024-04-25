import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { hobbyFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Hobby({ Wrapper, Input }: { Wrapper: WrapperUI; Input: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.hobby.hobbies",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Hobby",
				prepend: () => {
					actions.prepend(hobbyFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Name:'
							register={register(`attrs.hobby.hobbies.${i}.name`)}
							errors={errors.attrs?.hobby?.hobbies?.[i]?.name?.message}
							index={i}
						/>
						<Input
							label='Status:'
							register={register(`attrs.hobby.hobbies.${i}.status`)}
							errors={errors.attrs?.hobby?.hobbies?.[i]?.status?.message}
							index={i}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
