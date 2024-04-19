import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import Group from "../group";
import { educationFormSample } from "@/entities/addFormCV";
import FormAction from "../formAction";
import EditInput from "../editInput";

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
		name: "attrs.education.classes",
	});
	return (
		<Group
			label='Education'
			prepend={() => {
				prepend(educationFormSample());
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
								label='Time:'
								register={register(
									`attrs.education.classes.${i}.time`
								)}
								errors={
									errors.attrs?.education?.classes?.[i]?.time?.message
								}
								index={i}
							/>
							<EditInput
								label='Major:'
								register={register(
									`attrs.education.classes.${i}.major`
								)}
								errors={
									errors.attrs?.education?.classes?.[i]?.major
										?.message
								}
								index={i}
							/>
							<EditInput
								label='School:'
								register={register(
									`attrs.education.classes.${i}.school`
								)}
								errors={
									errors.attrs?.education?.classes?.[i]?.school
										?.message
								}
								index={i}
							/>
							<EditInput
								label='Status:'
								register={register(
									`attrs.education.classes.${i}.status`
								)}
								errors={
									errors.attrs?.education?.classes?.[i]?.status
										?.message
								}
								index={i}
							/>
						</div>
					);
				})}
			</div>
		</Group>
	);
};
