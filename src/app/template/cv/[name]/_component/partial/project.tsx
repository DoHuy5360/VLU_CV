import { useFieldArray, useFormContext } from "react-hook-form";
import Group from "../group";
import { UserDataForm } from "../editCvForm";
import { projectFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import EditInput from "../editInput";
import EditArea from "../editArea";

export default () => {
	const {
		register,
		control,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	const {
		fields,
		append,
		remove,
		insert,
		prepend,
		move,
		replace,
		swap,
		update,
	} = useFieldArray({
		control,
		name: "attrs.project.products",
	});
	return (
		<Group
			label='Project'
			prepend={() => {
				prepend(projectFormSample());
			}}
		>
			<div className='flex flex-col gap-3'>
				{fields.map((e, i) => {
					return (
						<div
							key={e.id}
							className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
						>
							<FormAction deleteAction={remove} index={i} />
							<EditInput
								label='Name:'
								index={i}
								register={register(
									`attrs.project.products.${i}.name`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.name?.message
								}
							/>
							<EditInput
								label='Time:'
								index={i}
								register={register(
									`attrs.project.products.${i}.time`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.time?.message
								}
							/>
							<EditInput
								label='Where:'
								index={i}
								register={register(
									`attrs.project.products.${i}.where`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.where
										?.message
								}
							/>
							<EditInput
								label='Member:'
								index={i}
								register={register(
									`attrs.project.products.${i}.member`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.member
										?.message
								}
							/>
							<EditInput
								label='Position:'
								index={i}
								register={register(
									`attrs.project.products.${i}.position`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.position
										?.message
								}
							/>
							<EditArea
								label='Tasks:'
								index={i}
								register={register(
									`attrs.project.products.${i}.tasks`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.tasks
										?.message
								}
							/>
							<EditInput
								label='Techs:'
								index={i}
								register={register(
									`attrs.project.products.${i}.techs`
								)}
								errors={
									errors?.attrs?.project?.products?.[i]?.techs
										?.message
								}
							/>
						</div>
					);
				})}
			</div>
		</Group>
	);
};
