import { useFormContext } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { InputUI, WrapperUI } from "./type";

export default function Personal({ Wrapper, Input, hideField }: { Wrapper: WrapperUI; Input: InputUI; hideField?: { fileName?: boolean } }) {
	const {
		register,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	return (
		<Wrapper.T01
			data={{
				label: "Personal",
			}}
		>
			{hideField?.fileName ? <></> : <Input label='File name:' register={register("name")} errors={errors.name?.message} />}
			<Input label='Your name:' register={register("attrs.head.name")} errors={errors.attrs?.head?.name?.message} />
			<Input label='Apply position:' register={register("attrs.head.position")} errors={errors.attrs?.head?.position?.message} />
			<Input label='Phone:' register={register("attrs.head.phone")} errors={errors.attrs?.head?.phone?.message} />
			<Input label='Address:' register={register("attrs.head.address")} errors={errors.attrs?.head?.address?.message} />
			<Input label='Email:' register={register("attrs.head.email")} errors={errors.attrs?.head?.email?.message} />
			<Input label='Day of Birth:' register={register("attrs.head.birth")} errors={errors.attrs?.head?.email?.message} />
			<Input label='Gender:' register={register("attrs.head.gender")} errors={errors.attrs?.head?.email?.message} />
			<Input label='Website:' register={register("attrs.head.website")} errors={errors.attrs?.head?.email?.message} />
		</Wrapper.T01>
	);
}
