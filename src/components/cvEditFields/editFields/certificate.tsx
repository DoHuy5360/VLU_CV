import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { certificationFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Certificate({ Wrapper, Input }: { Wrapper: WrapperUI; Input: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.certificate.certificates",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Chứng chỉ",
				prepend: () => {
					actions.prepend(certificationFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} length={actions.fields.length} index={i} />
						<Input label='Tên:' register={register(`attrs.certificate.certificates.${i}.name`)} errors={errors.attrs?.certificate?.certificates?.[i]?.name?.message} index={i} />
						<Input label='Thời điểm:' register={register(`attrs.certificate.certificates.${i}.time`)} errors={errors.attrs?.certificate?.certificates?.[i]?.time?.message} index={i} />
						<Input label='Đơn vị cấp:' register={register(`attrs.certificate.certificates.${i}.where`)} errors={errors.attrs?.certificate?.certificates?.[i]?.where?.message} index={i} />
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
