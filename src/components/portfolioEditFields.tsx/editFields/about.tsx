import { useFieldArray, useFormContext } from "react-hook-form";
import { ImageUI, InputUI, WrapperUI } from "@/components/cvEditFields/editFields/type";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { aboutImageFormSample } from "@/entities/addFormPortfolio";

export default function About({ Wrapper, Area, Image }: { Wrapper: WrapperUI; Area: InputUI; Image: ImageUI<PortfolioFormData> }) {
	const {
		register,
		control,
		setValue,
		getValues,
		trigger,
		formState: { errors },
	} = useFormContext<PortfolioFormData>();
	const actions = useFieldArray({
		control,
		name: "about.images",
	});
	return (
		<Wrapper.T01
			data={{
				label: "Về tôi",
				prepend: () => {
					actions.prepend(aboutImageFormSample());
				},
			}}
		>
			<Area label='Giới thiệu chi tiết:' register={register("about.content")} errors={errors.about?.content?.message} />
			<Image label='Ảnh cá nhân' setValue={setValue} getValues={getValues} trigger={trigger} errors={errors.about?.images?.message} index={0} />
		</Wrapper.T01>
	);
}
