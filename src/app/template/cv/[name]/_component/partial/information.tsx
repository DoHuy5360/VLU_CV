import { useFieldArray, useFormContext } from "react-hook-form";
import EditInput from "../editInput";
import Group from "../group";
import { UserDataForm } from "../editCvForm";

export default () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserDataForm>();

	return (
		<Group label='Basic Information'>
			<div className='flex flex-col gap-2'>
				<div className='flex gap-0.5 w-full'>
					<EditInput
						label='File name:'
						register={register("name")}
						errors={errors.name?.message}
					/>
					<div className='text-xs'>.pdf</div>
				</div>
				<EditInput
					label='Your name:'
					register={register("attrs.head.name")}
					errors={errors.attrs?.head?.name?.message}
				/>
				<EditInput
					label='Apply position:'
					register={register("attrs.head.position")}
					errors={errors.attrs?.head?.position?.message}
				/>
				<EditInput
					label='Phone:'
					register={register("attrs.head.phone")}
					errors={errors.attrs?.head?.phone?.message}
				/>
				<EditInput
					label='Address:'
					register={register("attrs.head.address")}
					errors={errors.attrs?.head?.address?.message}
				/>
				<EditInput
					label='Email:'
					register={register("attrs.head.email")}
					errors={errors.attrs?.head?.email?.message}
				/>
			</div>
		</Group>
	);
};
