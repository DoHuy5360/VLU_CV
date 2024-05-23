import {
	Head,
	Info,
	Goal,
	Experience,
	Project,
	Education,
	Skill,
	Badge,
	Certificate,
	Reference,
	Activity,
	Hobby,
	Other,
} from "@/components/cv/v03A/export";
import { UserData } from "@/types/userData";
import Column from "../symmetric/columns";
import Rows from "../symmetric/rows";

export default function A03Template(data: UserData) {
	return (
		<div className='w-full p-4 bg-white relative overflow-hidden'>
			<div className="absolute translate-y-[-50%] translate-x-[-50%] left-0 top-0 bg-[#FFF8F5] w-[100%] h-[100%] rounded-full"></div>
			<div className="relative z-10">
			<Column>
				<Rows>
					<Experience {...data.attrs.experience} />
					<Education {...data.attrs.education} />
					<Activity {...data.attrs.activity} />
					<Certificate {...data.attrs.certificate} />
				</Rows>
				<Rows>
					<Head {...data.attrs.head} />
					<Info {...data.attrs.head} />
					<Goal {...data.attrs.goal} />
					<Skill {...data.attrs.skill} />
				</Rows>
			</Column>
			</div>
		</div>
	);
}