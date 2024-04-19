import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import Group from "../group";
import {
	activityFormSample,
	badgeFormSample,
	educationFormSample,
} from "@/entities/addFormCV";
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
		name: "attrs.activity.activities",
	});
	return (
		<Group
			label='Activity'
			prepend={() => {
				prepend(activityFormSample());
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
								index={i}
								register={register(
									`attrs.activity.activities.${i}.time`
								)}
								errors={
									errors.attrs?.activity?.activities?.[i]?.time
										?.message
								}
							/>
							<EditInput
								label='Name:'
								index={i}
								register={register(
									`attrs.activity.activities.${i}.name`
								)}
								errors={
									errors.attrs?.activity?.activities?.[i]?.name
										?.message
								}
							/>
							<EditInput
								label='Position:'
								index={i}
								register={register(
									`attrs.activity.activities.${i}.position`
								)}
								errors={
									errors.attrs?.activity?.activities?.[i]?.position
										?.message
								}
							/>
							<EditArea
								label='Tasks:'
								index={i}
								register={register(
									`attrs.activity.activities.${i}.tasks`
								)}
								errors={
									errors.attrs?.activity?.activities?.[i]?.tasks
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
