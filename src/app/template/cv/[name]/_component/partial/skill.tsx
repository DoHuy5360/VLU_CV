import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import Group from "../group";
import {
	educationFormSample,
	skillFormSample,
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
		name: "attrs.skill.skills",
	});
	return (
		<Group
			label='Skill'
			prepend={() => {
				prepend(skillFormSample());
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
								register={register(`attrs.skill.skills.${i}.name`)}
								errors={
									errors.attrs?.skill?.skills?.[i]?.name?.message
								}
							/>
							<EditArea
								label='Status:'
								index={i}
								register={register(`attrs.skill.skills.${i}.status`)}
								errors={
									errors.attrs?.skill?.skills?.[i]?.status?.message
								}
							/>
						</div>
					);
				})}
			</div>
		</Group>
	);
};
