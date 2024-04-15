"use client";
import { connectToDatabase } from "@/libs/mongoosedb";
import { UserData, Work, userDataSample } from "@/types/userData";
import { useSession } from "next-auth/react";
import {
	Dispatch,
	createContext,
	useEffect,
	useReducer,
	useState,
} from "react";

export type CvActionType =
	| "init"
	| "update-file-name"
	| "update-user-name"
	| "update-user-position"
	| "update-user-birth"
	| "update-user-phone"
	| "update-user-email"
	| "update-user-address"
	| "update-user-website"
	| "update-user-gender"
	| "update-user-goal"
	| "update-user-experience-name"
	| "update-user-experience-time"
	| "update-user-experience-position"
	| "update-user-experience-tasks"
	| "update-user-project-name"
	| "update-user-project-time"
	| "update-user-project-where"
	| "update-user-project-member"
	| "update-user-project-position"
	| "update-user-project-tasks"
	| "update-user-project-techs"
	| "update-user-education-time"
	| "update-user-education-major"
	| "update-user-education-school"
	| "update-user-education-status"
	| "update-user-skill-name"
	| "update-user-skill-status"
	| "update-user-badge-name"
	| "update-user-badge-time"
	| "update-user-badge-where"
	| "update-user-certificate-name"
	| "update-user-certificate-time"
	| "update-user-certificate-where"
	| "update-user-reference-name"
	| "update-user-reference-where"
	| "update-user-reference-phone"
	| "update-user-activity-time"
	| "update-user-activity-name"
	| "update-user-activity-position"
	| "update-user-activity-tasks"
	| "update-user-hobby-name"
	| "update-user-hobby-status"
	| "update-user-other-content"
	| "delete-experience"
	| "add-project"
	| "add-education"
	| "add-skill"
	| "add-badge"
	| "add-certification"
	| "add-reference"
	| "add-activity"
	| "add-hobby";

export type CvAction =
	| {
			type: CvActionType;
			value: any;
			index: number;
	  }
	| {
			type: "add-experience";
			value: Work;
			index: number;
	  };

const initCvContext: UserData | null = null;
const reducer = (
	state: UserData | null,
	action: CvAction
): UserData | null => {
	if (state !== null)
		switch (action.type) {
			case "update-file-name":
				state.name = action.value;
				return {
					...state,
				};
			case "update-user-name":
				state.attrs.head.name = action.value;
				return {
					...state,
				};
			case "update-user-position":
				state.attrs.head.position = action.value;
				return {
					...state,
				};
			case "update-user-birth":
				state.attrs.head.birth = action.value;
				return {
					...state,
				};
			case "update-user-phone":
				state.attrs.head.phone = action.value;
				return {
					...state,
				};
			case "update-user-email":
				state.attrs.head.email = action.value;
				return {
					...state,
				};
			case "update-user-address":
				state.attrs.head.address = action.value;
				return {
					...state,
				};
			case "update-user-website":
				state.attrs.head.website = action.value;
				return {
					...state,
				};
			case "update-user-gender":
				state.attrs.head.gender = action.value;
				return {
					...state,
				};
			case "update-user-goal":
				state.attrs.goal.content = action.value;
				return {
					...state,
				};
			case "update-user-experience-name":
				state.attrs.experience.works[action.index].name =
					action.value;
				return {
					...state,
				};
			case "update-user-experience-time":
				state.attrs.experience.works[action.index].time =
					action.value;
				return {
					...state,
				};
			case "update-user-experience-position":
				state.attrs.experience.works[action.index].position =
					action.value;
				return {
					...state,
				};
			case "update-user-experience-tasks":
				state.attrs.experience.works[action.index].tasks =
					action.value;
				return {
					...state,
				};
			case "update-user-project-name":
				state.attrs.project.products[action.index].name =
					action.value;
				return { ...state };
			case "update-user-project-time":
				state.attrs.project.products[action.index].time =
					action.value;
				return { ...state };
			case "update-user-project-where":
				state.attrs.project.products[action.index].where =
					action.value;
				return { ...state };
			case "update-user-project-member":
				state.attrs.project.products[action.index].member =
					action.value;
				return { ...state };
			case "update-user-project-position":
				state.attrs.project.products[action.index].position =
					action.value;
				return { ...state };
			case "update-user-project-tasks":
				state.attrs.project.products[action.index].tasks =
					action.value;
				return { ...state };
			case "update-user-project-techs":
				state.attrs.project.products[action.index].techs =
					action.value;
				return { ...state };
			case "update-user-education-time":
				state.attrs.education.classes[action.index].time =
					action.value;
				return { ...state };
			case "update-user-education-major":
				state.attrs.education.classes[action.index].major =
					action.value;
				return { ...state };
			case "update-user-education-school":
				state.attrs.education.classes[action.index].school =
					action.value;
				return { ...state };
			case "update-user-education-status":
				state.attrs.education.classes[action.index].status =
					action.value;
				return { ...state };
			case "update-user-skill-name":
				state.attrs.skill.skills[action.index].name = action.value;
				return { ...state };
			case "update-user-skill-status":
				state.attrs.skill.skills[action.index].status = action.value;
				return { ...state };
			case "update-user-badge-name":
				state.attrs.badge.achievements[action.index].name =
					action.value;
				return { ...state };
			case "update-user-badge-time":
				state.attrs.badge.achievements[action.index].time =
					action.value;
				return { ...state };
			case "update-user-badge-where":
				state.attrs.badge.achievements[action.index].where =
					action.value;
				return { ...state };
			case "update-user-certificate-name":
				state.attrs.certificate.certificates[action.index].name =
					action.value;
				return { ...state };
			case "update-user-certificate-time":
				state.attrs.certificate.certificates[action.index].time =
					action.value;
				return { ...state };
			case "update-user-certificate-where":
				state.attrs.certificate.certificates[action.index].where =
					action.value;
				return { ...state };
			case "update-user-reference-name":
				state.attrs.reference.references[action.index].name =
					action.value;
				return { ...state };
			case "update-user-reference-where":
				state.attrs.reference.references[action.index].where =
					action.value;
				return { ...state };
			case "update-user-reference-phone":
				state.attrs.reference.references[action.index].phone =
					action.value;
				return { ...state };
			case "update-user-activity-time":
				state.attrs.activity.activities[action.index].time =
					action.value;
				return { ...state };
			case "update-user-activity-name":
				state.attrs.activity.activities[action.index].name =
					action.value;
				return { ...state };
			case "update-user-activity-position":
				state.attrs.activity.activities[action.index].position =
					action.value;
				return { ...state };
			case "update-user-activity-tasks":
				state.attrs.activity.activities[action.index].tasks =
					action.value;
				return { ...state };
			case "update-user-hobby-name":
				state.attrs.hobby.hobbies[action.index].name = action.value;
				return { ...state };
			case "update-user-hobby-status":
				state.attrs.hobby.hobbies[action.index].status = action.value;
				return { ...state };
			case "update-user-other-content":
				state.attrs.other.content = action.value;
				return { ...state };
			case "add-experience":
				state.attrs.experience.works.unshift(action.value);
				return {
					...state,
				};
			case "add-project":
				state.attrs.project.products.unshift(action.value);
				return {
					...state,
				};
			case "add-education":
				state.attrs.education.classes.unshift(action.value);
				return {
					...state,
				};
			case "add-skill":
				state.attrs.skill.skills.unshift(action.value);
				return {
					...state,
				};
			case "add-badge":
				state.attrs.badge.achievements.unshift(action.value);
				return {
					...state,
				};
			case "add-certification":
				state.attrs.certificate.certificates.unshift(action.value);
				return {
					...state,
				};
			case "add-reference":
				state.attrs.reference.references.unshift(action.value);
				return {
					...state,
				};
			case "add-activity":
				state.attrs.activity.activities.unshift(action.value);
				return {
					...state,
				};
			case "add-hobby":
				state.attrs.hobby.hobbies.unshift(action.value);
				return {
					...state,
				};
			case "delete-experience":
				state.attrs.experience.works =
					state.attrs.experience.works.filter((e, i) => {
						if (action.index !== i) return e;
					});
				return {
					...state,
				};
			default:
				return state;
		}
	else {
		state = action.value;
		return state;
	}
};
export const CvContext = createContext<{
	state: UserData | null;
	dispatch: Dispatch<CvAction>;
	editable: boolean;
	setEditable: Function;
}>({
	state: initCvContext,
	dispatch: Function as Dispatch<any>,
	editable: true,
	setEditable: (temp: boolean) => {},
});

function CvProvider({ children }: { children: JSX.Element }) {
	const [state, dispatch] = useReducer(reducer, initCvContext);
	const [editable, setEditable] = useState(false);
	useEffect(() => {
		async function getDataCV() {
			const data = await fetch(`http://localhost:3000/api/cv`);
			dispatch({
				type: "init",
				value: await data.json(),
				index: 0,
			});
		}
		getDataCV();
	}, []);
	return (
		<CvContext.Provider
			value={{
				state,
				dispatch,
				editable,
				setEditable,
			}}
		>
			{children}
		</CvContext.Provider>
	);
}

export default CvProvider;
