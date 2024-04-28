import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../../view/editCV/_component/editCvForm";
import { projectFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import { InputUI, WrapperUI } from "./type";

export default function Project({ Wrapper, Input, Area }: { Wrapper: WrapperUI; Input: InputUI; Area: InputUI }) {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const actions = useFieldArray({
		control,
		name: "attrs.project.products",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Dự án",
				prepend: () => {
					actions.prepend(projectFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction deleteAction={actions.remove} index={i} />
						<Input
							label='Tên:'
							index={i}
							register={register(`attrs.project.products.${i}.name`)}
							errors={errors?.attrs?.project?.products?.[i]?.name?.message}
						/>
						<Input
							label='Thời gian:'
							index={i}
							register={register(`attrs.project.products.${i}.time`)}
							errors={errors?.attrs?.project?.products?.[i]?.time?.message}
						/>
						<Input
							label='Tại:'
							index={i}
							register={register(`attrs.project.products.${i}.where`)}
							errors={errors?.attrs?.project?.products?.[i]?.where?.message}
						/>
						<Input
							label='Thành viên:'
							index={i}
							register={register(`attrs.project.products.${i}.member`)}
							errors={errors?.attrs?.project?.products?.[i]?.member?.message}
						/>
						<Input
							label='Vai trò:'
							index={i}
							register={register(`attrs.project.products.${i}.position`)}
							errors={errors?.attrs?.project?.products?.[i]?.position?.message}
						/>
						<Area
							label='Đầu việc:'
							index={i}
							register={register(`attrs.project.products.${i}.tasks`)}
							errors={errors?.attrs?.project?.products?.[i]?.tasks?.message}
						/>
						<Input
							label='Techs:'
							index={i}
							register={register(`attrs.project.products.${i}.techs`)}
							errors={errors?.attrs?.project?.products?.[i]?.techs?.message}
						/>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
