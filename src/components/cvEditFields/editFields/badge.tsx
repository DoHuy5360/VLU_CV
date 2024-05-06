import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { badgeFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Badge({ Wrapper, Input }: { Wrapper: WrapperUI; Input: InputUI }) {
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
				label: "Danh hiệu - Giải thưởng",
				prepend: () => {
					actions.prepend(badgeFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} length={actions.fields.length} index={i} />
						<Input label='Tên:' register={register(`attrs.badge.achievements.${i}.name`)} errors={errors.attrs?.badge?.achievements?.[i]?.name?.message} index={i} />
						<Input label='Thời gian:' register={register(`attrs.badge.achievements.${i}.time`)} errors={errors.attrs?.badge?.achievements?.[i]?.time?.message} index={i} />
						<Input label='Tại:' register={register(`attrs.badge.achievements.${i}.where`)} errors={errors.attrs?.badge?.achievements?.[i]?.where?.message} index={i} />
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
