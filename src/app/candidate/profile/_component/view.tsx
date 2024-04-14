import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import Experience from "./info/experience";
import Project from "./info/project";
import Certificate from "./info/certificate";
import Badge from "./info/badge";
import Activity from "./info/activity";
import Education from "./info/education";
import Hobby from "./info/hobby";
import Reference from "./info/reference";
import Other from "./info/other";
import Information from "./info/information";
import { UserData } from "@/types/userData";
import Save from "./save";

const View: {
	[key: string]: (data: UserData, dispatch: Function) => JSX.Element;
} = {
	Information: Information,
	Experience: Experience,
	Project: Project,
	Certificate: Certificate,
	Education: Education,
	Badge: Badge,
	Activity: Activity,
	Hobby: Hobby,
	Reference: Reference,
	Other: Other,
};

export default ({ name }: { name: keyof typeof View }) => {
	const { state, dispatch } = useContext(CvContext);
	return state === null ? (
		<div>Loading...</div>
	) : (
		<div className='flex flex-col h-dvh'>
			<div className='overflow-y-scroll p-2'>
				{View[name](state, dispatch)}
			</div>
			<Save data={state} />
		</div>
	);
};
