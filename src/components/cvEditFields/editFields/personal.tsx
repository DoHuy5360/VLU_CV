import { useFormContext } from "react-hook-form";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { AvatarUI, InputUI, WrapperUI } from "./type";

export default function Personal({ Wrapper, Input, Avatar, hideField }: { Wrapper: WrapperUI; Input: InputUI; Avatar: AvatarUI; hideField?: { fileName?: boolean } }) {
	const {
		register,
		setValue,
		getValues,
		trigger,
		formState: { errors },
	} = useFormContext<UserDataForm>();
	return (
		<Wrapper.T01
			data={{
				label: "Thông tin cơ bản",
			}}
		>
			{hideField?.fileName ? <></> : <Input label='Tên của CV:' register={register("name")} errors={errors.name?.message} />}
			<Avatar label='Chọn ảnh đại diện:' setValue={setValue} getValues={getValues} trigger={trigger} errors='' />
			<Input label='Họ tên:' register={register("attrs.head.name")} errors={errors.attrs?.head?.name?.message} />
			<Input label='Vị trí ứng tuyển:' register={register("attrs.head.position")} errors={errors.attrs?.head?.position?.message} />
			<Input label='Số điện thoại:' register={register("attrs.head.phone")} errors={errors.attrs?.head?.phone?.message} />
			<Input label='Địa chỉ:' register={register("attrs.head.address")} errors={errors.attrs?.head?.address?.message} />
			<Input label='Email:' register={register("attrs.head.email")} errors={errors.attrs?.head?.email?.message} />
			<Input label='Ngày sinh:' register={register("attrs.head.birth")} errors={errors.attrs?.head?.email?.message} />
			<Input label='Giới tính:' register={register("attrs.head.gender")} errors={errors.attrs?.head?.email?.message} />
			<Input label='Website:' register={register("attrs.head.website")} errors={errors.attrs?.head?.email?.message} />
		</Wrapper.T01>
	);
}
