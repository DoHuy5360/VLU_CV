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
import { UserData } from "@/types/userData";

function A01Template(data: UserData) {
	return (
		<div className='w-full p-2 bg-slate-200'>
			<div className='m-auto sm:w-11/12 md:w-2/3 lg:w-2/3 xl:w-2/4  p-4 bg-white'>
				<div id='sectionParent' className='flex flex-col gap-4'>
					<V01AHead {...data.attrs.head} />
					<V01AGoal {...data.attrs.goal} />
					<V01AExperience {...data.attrs.experience} />
					<V01AProject {...data.attrs.project} />
					<Column02
						{...{
							left: <V01AEducation {...data.attrs.education} />,
							right: <V01ASkill {...data.attrs.skill} />,
						}}
					/>
					<Column03
						{...{
							left: <V01ABadge {...data.attrs.badge} />,
							middle: <V01ACertificate {...data.attrs.certificate} />,
							right: <V01AReference {...data.attrs.reference} />,
						}}
					/>

					<Column03
						{...{
							left: <V01AActivity {...data.attrs.activity} />,
							middle: <V01AHobby {...data.attrs.hobby} />,
							right: <V01AOther {...data.attrs.other} />,
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default A01Template;
