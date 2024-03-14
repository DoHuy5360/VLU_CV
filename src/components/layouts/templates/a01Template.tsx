import {
	V01AHead,
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
} from "@/components/cv/v01A/export";
import { Column02, Column03 } from "../symmetric/export";

function A01Template(attrs: any) {
	return (
		<div className='w-full p-2 bg-slate-200'>
			<div className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/4  p-4 bg-white'>
				<div id='sectionParent' className='flex flex-col gap-4'>
					<V01AHead {...attrs.head} />
					<V01AGoal {...attrs.goal} />
					<V01AExperience {...attrs.experience} />
					<V01AProject {...attrs.project} />
					<Column02
						{...{
							left: <V01AEducation {...attrs.education} />,
							right: <V01ASkill {...attrs.skill} />,
						}}
					/>
					<Column03
						{...{
							left: <V01ABadge {...attrs.badge} />,
							middle: <V01ACertificate {...attrs.certificate} />,
							right: <V01AReference {...attrs.reference} />,
						}}
					/>
					<Column03
						{...{
							left: <V01AActivity {...attrs.activity} />,
							middle: <V01AHobby {...attrs.hobby} />,
							right: <V01AOther {...attrs.other} />,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default A01Template;
