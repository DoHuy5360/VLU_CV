import { useFormContext } from "react-hook-form";
import EditArea from "../editArea";
import Group from "../group";
import { UserDataForm } from "../editCvForm";

export default () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	return (
		<Group label='Goal'>
			<EditArea
				label='Goal:'
				register={register("attrs.goal.content")}
				errors={errors.attrs?.goal?.content?.message}
			/>
		</Group>
	);
};
