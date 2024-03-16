import {
	V01AHead,
	V01AInfo,
	V01AGoal,
	V01AExperience,
	V01AProject,
	V01AEducation,
	V01ASkill,
	V01ABadge,
	V01ACertificate,
	V01AReference,
	V01AActivity,
	V01AHobby,
	V01AOther,
} from "@/components/cv/v02A/export";
import { Column02, Column03, Rows } from "../symmetric/export";

function A02Template() {
	return (
		<div className='w-full p-2 bg-slate-200'>
			<div className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/4  p-4 bg-white'>
				<div id='sectionParent' className='flex flex-col gap-4'>
					<Column02
						{...{
							left: Rows([
								<V01AHead />,
								<V01AGoal />,
								<V01AExperience />,
								<V01AActivity />,
							]),
							right: (
								<div className='bg-blue-50'>
									{Rows([
										<V01AInfo />,
										<V01AEducation />,
										<V01ASkill />,
										<V01ACertificate />,
									])}
								</div>
							),
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default A02Template;
