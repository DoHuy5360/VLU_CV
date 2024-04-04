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
					<V01AGoal />
					{/* <V01AExperience />
					<V01AProject />
					<Column02
						{...{
							left: <V01AEducation />,
							right: <V01ASkill />,
						}}
					/>
					<Column03
						{...{
							left: <V01ABadge />,
							middle: <V01ACertificate />,
							right: <V01AReference />,
						}}
					/>
					<Column03
						{...{
							left: <V01AActivity />,
							middle: <V01AHobby />,
							right: <V01AOther />,
						}}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default A01Template;
