import { useFieldArray, useFormContext } from "react-hook-form";
import { UserDataForm } from "../editCvForm";
import Group from "../group";
import {
	badgeFormSample,
	educationFormSample,
	referenceFormSample,
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
		name: "attrs.reference.references",
	});
	return (
		<Group
			label='Reference'
			prepend={() => {
				prepend(referenceFormSample());
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
									`attrs.reference.references.${i}.name`
								)}
								errors={
									errors.attrs?.reference?.references?.[i]?.name
										?.message
								}
								index={i}
							/>
							<EditInput
								label='Where:'
								register={register(
									`attrs.reference.references.${i}.where`
								)}
								errors={
									errors.attrs?.reference?.references?.[i]?.where
										?.message
								}
								index={i}
							/>
							<EditInput
								label='Phone:'
								register={register(
									`attrs.reference.references.${i}.phone`
								)}
								errors={
									errors.attrs?.reference?.references?.[i]?.phone
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
