import { useFieldArray, useFormContext } from "react-hook-form";
import { ImageUI, InputUI, SelectUI, SelectUIParams, WrapperUI } from "@/components/cvEditFields/editFields/type";
import { PortfolioFormData, SkillDataForm } from "@/entities/getDataPortfolio";
import FormAction from "../formAction";
import { projectFormSample, projectTechnologiesFormSample } from "@/entities/addFormPortfolio";

export default function Project({
	Wrapper,
	Input,
	Area,
	Image,
	Select,
}: {
	Wrapper: WrapperUI;
	Input: InputUI;
	Area: InputUI;
	Image: ImageUI<PortfolioFormData>;
	Select: SelectUI<PortfolioFormData>;
}) {
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
		name: "projects",
	});

	return (
		<Wrapper.T02
			data={{
				label: "Dự án",
				prepend: () => {
					actions.prepend(projectFormSample());
				},
			}}
		>
			{actions.fields.map((e, i) => {
				return (
					<Wrapper.T03 key={e.id}>
						<FormAction actions={actions} length={actions.fields.length} index={i} />
						<Input label='Tên:' register={register(`projects.${i}.name`)} errors={errors.projects?.[i]?.name?.message} index={i} />
						<Input label='Thời gian:' register={register(`projects.${i}.time`)} errors={errors.projects?.[i]?.time?.message} index={i} />
						<Area label='Đầu việc:' register={register(`projects.${i}.tasks`)} errors={errors.projects?.[i]?.tasks?.message} index={i} />
						<Select label='Công nghệ:' index={i} />
						<Image label='Hình ảnh:' setValue={setValue} getValues={getValues} trigger={trigger} errors={errors.projects?.[i]?.images?.message} index={i} />
					</Wrapper.T03>
				);
			})}
		</Wrapper.T02>
	);
}
