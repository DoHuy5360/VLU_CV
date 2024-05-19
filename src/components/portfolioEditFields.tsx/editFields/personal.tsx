import { useFormContext } from "react-hook-form";
import { AvatarUI, InputUI, WrapperUI } from "@/components/cvEditFields/editFields/type";
import { PortfolioFormData } from "@/entities/getDataPortfolio";

export default function Personal({ Wrapper, Input, Avatar, hideField }: { Wrapper: WrapperUI; Input: InputUI; Avatar: AvatarUI<PortfolioFormData>; hideField?: { fileName?: boolean } }) {
	const {
		register,
		setValue,
		getValues,
		trigger,
		formState: { errors },
	} = useFormContext<PortfolioFormData>();
	return (
		<Wrapper.T01
			data={{
				label: "Thông tin cơ bản",
			}}
		>
			{hideField?.fileName ? <></> : <Input label='Tên của CV:' register={register("name")} errors={errors.name?.message} />}
			<Avatar label='Chọn ảnh đại diện:' setValue={setValue} getValues={getValues} trigger={trigger} errors='' />
			<Input label='Họ tên:' register={register("personal.name")} errors={errors.personal?.name?.message} />
			<Input label='Số điện thoại:' register={register("personal.phone")} errors={errors.personal?.phone?.message} />
			<Input label='Địa chỉ:' register={register("personal.address")} errors={errors.personal?.address?.message} />
		</Wrapper.T01>
	);
}
