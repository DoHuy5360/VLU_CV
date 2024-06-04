import { V01AHead, V01AGoal, V01AExperience, V01AProject, V01AEducation, V01ASkill, V01ABadge, V01ACertificate, V01AReference, V01AActivity, V01AHobby, V01AOther } from "@/components/cv/v04A/export";
import { UserData } from "@/types/userData";
import Columns from "../symmetric/columns";
import Rows from "../symmetric/rows";
import FlexColumn from "../symmetric/flexColumn";

export default function A04Template(data: UserData) {
	return (
		<div className='bg-white'>
			<Rows>
				<div className='p-4'>
					<V01AHead {...data.attrs.head} />
				</div>
				<div className='border-b-[3px] border-black'></div>
				<Columns>
					<Rows>
						<V01AEducation {...data.attrs.education} />
						<V01AExperience {...data.attrs.experience} />
						<V01AProject {...data.attrs.project} />
						<V01ACertificate {...data.attrs.certificate} />
						<V01ABadge {...data.attrs.badge} />
						<V01AReference {...data.attrs.reference} />
						<V01AActivity {...data.attrs.activity} />
					</Rows>
					<FlexColumn>
						<V01AGoal {...data.attrs.goal} />
						<V01ASkill {...data.attrs.skill} />
						<V01AHobby {...data.attrs.hobby} />
						<V01AOther {...data.attrs.other} />
					</FlexColumn>
				</Columns>
			</Rows>
		</div>
	);
}
