import { useFormContext } from "react-hook-form";
import EditInput from "../editInput";
import Group from "../group";
import { UserDataForm } from "../editCvForm";

export default () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserDataForm>();

	return (
		<Group label='Other'>
			<div className='flex flex-col gap-3'>
				<EditInput
					register={register("attrs.other.content")}
					errors={errors.attrs?.other?.content?.message}
				/>
			</div>
		</Group>
	);
};
