import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import FormAction from "../formAction";
import { activityFormSample } from "@/entities/addFormCV";
import { InputUI, WrapperUI } from "./type";

export default function Activity({ Wrapper, Input, Area }: { Wrapper: WrapperUI; Input: InputUI; Area: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.activity.activities",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Hoạt động",
				prepend: () => {
					actions.prepend(activityFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Thời gian:'
							index={i}
							register={register(`attrs.activity.activities.${i}.time`)}
							errors={errors.attrs?.activity?.activities?.[i]?.time?.message}
						/>
						<Input
							label='Tên:'
							index={i}
							register={register(`attrs.activity.activities.${i}.name`)}
							errors={errors.attrs?.activity?.activities?.[i]?.name?.message}
						/>
						<Input
							label='Vai trò:'
							index={i}
							register={register(`attrs.activity.activities.${i}.position`)}
							errors={errors.attrs?.activity?.activities?.[i]?.position?.message}
						/>
						<Area
							label='Đầu việc:'
							index={i}
							register={register(`attrs.activity.activities.${i}.tasks`)}
							errors={errors.attrs?.activity?.activities?.[i]?.tasks?.message}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
