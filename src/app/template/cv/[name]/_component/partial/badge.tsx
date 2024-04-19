import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import Group from "../group";
import {
	badgeFormSample,
	educationFormSample,
} from "@/entities/addFormCV";
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
		name: "attrs.badge.achievements",
	});
	return (
		<Group
			label='Badge'
			prepend={() => {
				prepend(badgeFormSample());
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
								register={register(
									`attrs.badge.achievements.${i}.name`
								)}
								errors={
									errors.attrs?.badge?.achievements?.[i]?.name
										?.message
								}
								index={i}
							/>
							<EditInput
								label='Time:'
								register={register(
									`attrs.badge.achievements.${i}.time`
								)}
								errors={
									errors.attrs?.badge?.achievements?.[i]?.time
										?.message
								}
								index={i}
							/>
							<EditInput
								label='Where:'
								register={register(
									`attrs.badge.achievements.${i}.where`
								)}
								errors={
									errors.attrs?.badge?.achievements?.[i]?.where
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
