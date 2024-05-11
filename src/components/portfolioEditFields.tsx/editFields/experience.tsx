import { useFieldArray, useFormContext } from "react-hook-form";
import { ImageUI, InputUI, WrapperUI } from "@/components/cvEditFields/editFields/type";
import { ImageSchema, PortfolioFormData } from "@/entities/getDataPortfolio";
import FormAction from "../formAction";
import { experienceFormSample } from "@/entities/addFormPortfolio";

export default function Experience({ Wrapper, Input, Area, Image }: { Wrapper: WrapperUI; Input: InputUI; Area: InputUI; Image: ImageUI<PortfolioFormData> }) {
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
		name: "experiences",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Kinh nghiệm",
				prepend: () => {
					actions.prepend(experienceFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} length={actions.fields.length} index={i} />
						<Input label='Tên:' register={register(`experiences.${i}.name`)} errors={errors.experiences?.[i]?.name?.message} index={i} />
						<Input label='Thời gian:' register={register(`experiences.${i}.time`)} errors={errors.experiences?.[i]?.time?.message} index={i} />
						<Input label='Vị trí:' register={register(`experiences.${i}.position`)} errors={errors.experiences?.[i]?.position?.message} index={i} />
						<Area label='Đầu việc:' register={register(`experiences.${i}.tasks`)} errors={errors.experiences?.[i]?.tasks?.message} index={i} />
						<Image setValue={setValue} getValues={getValues} trigger={trigger} errors={errors.experiences?.[i]?.images?.message} index={i} />
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
