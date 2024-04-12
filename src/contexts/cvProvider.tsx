"use client";
import { connectToDatabase } from "@/libs/mongoosedb";
import { UserData, userDataSample } from "@/types/userData";
import { useSession } from "next-auth/react";
import {
	Dispatch,
	createContext,
	useEffect,
	useReducer,
	useState,
} from "react";

type Action = {
	type: any;
	index: number;
	value: any;
};
const initCvContext: UserData | null = null;
const reducer = (
	state: UserData | null,
	action: Action
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
			default:
				return state;
		}
	else {
		state = action.value;
		return state;
	}
};
// experience
// project
// education
// skill
// badge
// certificate
// reference
// activity
// hobby
// other
export const CvContext = createContext<{
	state: UserData | null;
	dispatch: Dispatch<Action>;
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
