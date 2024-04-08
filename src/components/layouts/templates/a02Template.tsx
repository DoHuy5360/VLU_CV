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
import { UserData } from "@/types/userData";

function A02Template(data: UserData) {
	return (
		<div className='w-full p-4 bg-white'>
			<div id='sectionParent' className='flex flex-col gap-4'>
				<Column02
					{...{
						left: Rows([
							<V01AHead {...data.attrs.head} />,
							<V01AGoal {...data.attrs.goal} />,
							<V01AExperience {...data.attrs.experience} />,
							<V01AActivity {...data.attrs.activity} />,
						]),
						right: (
							<div className='bg-blue-50'>
								{Rows([
									<V01AInfo {...data.attrs.head} />,
									<V01AEducation {...data.attrs.education} />,
									<V01ASkill {...data.attrs.skill} />,
									<V01ACertificate {...data.attrs.certificate} />,
								])}
							</div>
						),
					}}
				/>
			</div>
		</div>
	);
}

export default A02Template;
