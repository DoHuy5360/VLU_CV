import { CvContext } from "@/contexts/cvProvider";
import { useContext } from "react";
import Experience from "./info/experience";
import Project from "./info/project";
import Certificate from "./info/certificate";
import Badge from "./info/badge";
import Activity from "./info/activity";
import Education from "./info/education";
import Other from "./info/other";
import Information from "./info/information";
import { UserData } from "@/types/userData";
import Save from "./save";

const View: { [key: string]: (data: UserData) => JSX.Element } = {
	Information: Information,
	Experience: Experience,
	Project: Project,
	Certificate: Certificate,
	Education: Education,
	Badge: Badge,
	Activity: Activity,
	Other: Other,
};

export default ({ name }: { name: keyof typeof View }) => {
	const { state } = useContext(CvContext);
	return state === null ? (
		<div>Loading...</div>
	) : (
		<div className='flex flex-col h-dvh'>
			<div className='overflow-y-scroll'>{View[name](state)}</div>
			<Save data={state} />
		</div>
	);
};
