import { experienceFormSample } from "@/entities/addFormCV";
import Group from "../group";
import FormAction from "../formAction";
import { deleteExperienceAction } from "@/entities/deleteFormCV";
import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import EditInput from "../editInput";
import { BiTrash } from "react-icons/bi";
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
		name: "attrs.experience.works",
	});
	return (
		<Group
			label='Experience'
			prepend={() => {
				prepend(experienceFormSample());
			}}
		>
			<div className='flex flex-col gap-3'>
				{fields.map((e, i) => {
					return (
						<div
							key={e.id}
							className='flex flex-col gap-2 border-[1px] border-slate-200 p-1'
						>
							<FormAction deleteAction={remove} index={i} />
							<div className='text-xs flex flex-col gap-2'>
								<EditInput
									label='Name:'
									errors={
										errors.attrs?.experience?.works?.[i]?.name
											?.message
									}
									register={register(
										`attrs.experience.works.${i}.name`
									)}
									index={i}
								/>

								<EditInput
									label='Time:'
									register={register(
										`attrs.experience.works.${i}.time`
									)}
									errors={
										errors.attrs?.experience?.works?.[i]?.time
											?.message
									}
									index={i}
								/>
								<EditInput
									label='Position:'
									register={register(
										`attrs.experience.works.${i}.position`
									)}
									errors={
										errors.attrs?.experience?.works?.[i]?.position
											?.message
									}
									index={i}
								/>
								<EditArea
									label='Tasks:'
									register={register(
										`attrs.experience.works.${i}.tasks`
									)}
									errors={
										errors.attrs?.experience?.works?.[i]?.tasks
											?.message
									}
									index={i}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</Group>
	);
};
