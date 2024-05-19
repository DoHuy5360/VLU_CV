import { Buttons } from "@/components/button/buttons";
import { SelectUIParams } from "@/components/cvEditFields/editFields/type";
import { projectTechnologiesFormSample } from "@/entities/addFormPortfolio";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
import { useFieldArray, useFormContext } from "react-hook-form";
import { BiPlus } from "react-icons/bi";

export default function EditProjectTechnology({ label, index }: SelectUIParams<PortfolioFormData>) {
	const {
		register,
		control,
		setValue,
		getValues,
		trigger,
		formState: { errors },
	} = useFormContext<PortfolioFormData>();
	const techActions = useFieldArray({
		control,
		name: `projects.${index}.technologies`,
	});
	return (
		<div className='flex flex-col gap-1'>
			<div className='text-xs font-bold text-slate-400'>{label}</div>
			<div
				onClick={() => {
					techActions.append(projectTechnologiesFormSample());
				}}
				className='w-fit'
			>
				<Buttons.Create.Icon />
			</div>
			<div className='grid grid-cols-6 gap-1'>
				{techActions.fields.map((tech, i) => {
					return <input key={tech.id} {...register(`projects.${index}.technologies.${i}.name`)} className='border-[1px] px-1' type='text' />;
				})}
			</div>
		</div>
	);
}
