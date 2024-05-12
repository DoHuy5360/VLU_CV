import { useFieldArray, useFormContext } from "react-hook-form";
import { ImageUI, InputUI, WrapperUI } from "@/components/cvEditFields/editFields/type";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import FormAction from "../formAction";
import { skillFormSample } from "@/entities/addFormPortfolio";

export default function Skill({ Wrapper, Input, Image }: { Wrapper: WrapperUI; Input: InputUI; Image: ImageUI<PortfolioFormData> }) {
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
		name: "skills",
	});
	return (
		<Wrapper.T02
			data={{
				label: "Kỹ năng",
				prepend: () => {
					actions.prepend(skillFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} length={actions.fields.length} index={i} />
						<Wrapper.T05>
							<Image setValue={setValue} getValues={getValues} trigger={trigger} errors={errors.skills?.[i]?.icon?.message} index={i} />
							<Input label='Tên:' register={register(`skills.${i}.name`)} errors={errors.skills?.[i]?.name?.message} index={i} />
						</Wrapper.T05>
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
