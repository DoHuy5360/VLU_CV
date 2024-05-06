import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { referenceFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Reference({ Wrapper, Input }: { Wrapper: WrapperUI; Input: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.reference.references",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Tham chiếu",
				prepend: () => {
					actions.prepend(referenceFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} length={actions.fields.length} index={i} />
						<Input label='Tên:' register={register(`attrs.reference.references.${i}.name`)} errors={errors.attrs?.reference?.references?.[i]?.name?.message} index={i} />
						<Input label='Tại:' register={register(`attrs.reference.references.${i}.where`)} errors={errors.attrs?.reference?.references?.[i]?.where?.message} index={i} />
						<Input label='Liên lạc:' register={register(`attrs.reference.references.${i}.phone`)} errors={errors.attrs?.reference?.references?.[i]?.phone?.message} index={i} />
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
