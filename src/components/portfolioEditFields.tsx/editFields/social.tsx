import { useFormContext } from "react-hook-form";
import { InputUI, WrapperUI } from "@/components/cvEditFields/editFields/type";
import { PortfolioFormData } from "@/entities/getDataPortfolio";

export default function Social({ Wrapper, Input }: { Wrapper: WrapperUI; Input: InputUI }) {
	const {
		register,
		formState: { errors },
	} = useFormContext<PortfolioFormData>();
	return (
		<Wrapper.T01
			data={{
				label: "Mạng lưới",
			}}
		>
			<Input label='GitHub:' register={register(`socials.gitHub`)} errors={errors?.socials?.gitHub?.message} />
			<Input label='LinkedIn:' register={register(`socials.linkedIn`)} errors={errors?.socials?.linkedIn?.message} />
			<Input label='Email:' register={register(`socials.email`)} errors={errors?.socials?.email?.message} />
		</Wrapper.T01>
	);
}
