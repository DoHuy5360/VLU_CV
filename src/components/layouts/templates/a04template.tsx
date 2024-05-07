import { V01AHead, V01AGoal, V01AExperience, V01AProject, V01AEducation, V01ASkill, V01ABadge, V01ACertificate, V01AReference, V01AActivity, V01AHobby, V01AOther } from "@/components/cv/v01A/export";
import { UserData } from "@/types/userData";
import Columns from "../symmetric/columns";

function A01Template(data: UserData) {
	return (
		<div className='p-4 bg-white'>
			<div id='sectionParent' className='flex flex-col gap-4'>
				<V01AHead {...data.attrs.head} />
				<V01AGoal {...data.attrs.goal} />
				<V01AExperience {...data.attrs.experience} />
				<V01AProject {...data.attrs.project} />
				<Columns>
					<V01AEducation {...data.attrs.education} />
					<V01ASkill {...data.attrs.skill} />
				</Columns>
				<Columns>
					<V01ABadge {...data.attrs.badge} />
					<V01ACertificate {...data.attrs.certificate} />
					<V01AReference {...data.attrs.reference} />
				</Columns>
				<Columns>
					<V01AActivity {...data.attrs.activity} />
					<V01AHobby {...data.attrs.hobby} />
					<V01AOther {...data.attrs.other} />
				</Columns>
			</div>
		</div>
	);
}

export default A01Template;
