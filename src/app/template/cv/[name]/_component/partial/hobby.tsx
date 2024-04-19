import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import Group from "../group";
import {
	badgeFormSample,
	educationFormSample,
	hobbyFormSample,
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
		name: "attrs.hobby.hobbies",
	});
	return (
		<Group
			label='Hobby'
			prepend={() => {
				prepend(hobbyFormSample());
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
								register={register(`attrs.hobby.hobbies.${i}.name`)}
								errors={
									errors.attrs?.hobby?.hobbies?.[i]?.name?.message
								}
								index={i}
							/>
							<EditInput
								label='Status:'
								register={register(`attrs.hobby.hobbies.${i}.status`)}
								errors={
									errors.attrs?.hobby?.hobbies?.[i]?.status?.message
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
