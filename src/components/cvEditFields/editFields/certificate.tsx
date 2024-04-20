import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../../app/template/cv/[name]/_component/editCvForm";
import { certificationFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Certificate({
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
		name: "attrs.certificate.certificates",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Certificate",
				prepend: () => {
					actions.prepend(certificationFormSample());
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
								`attrs.certificate.certificates.${i}.name`
							)}
							errors={
								errors.attrs?.certificate?.certificates?.[i]?.name
									?.message
							}
							index={i}
						/>
						<Input
							label='Time:'
							register={register(
								`attrs.certificate.certificates.${i}.time`
							)}
							errors={
								errors.attrs?.certificate?.certificates?.[i]?.time
									?.message
							}
							index={i}
						/>
						<Input
							label='Where:'
							register={register(
								`attrs.certificate.certificates.${i}.where`
							)}
							errors={
								errors.attrs?.certificate?.certificates?.[i]?.where
									?.message
							}
							index={i}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
