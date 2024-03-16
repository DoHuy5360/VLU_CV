"use client";
import { UserData, userDataSample } from "@/models/userData";
import { Dispatch, createContext, useReducer, useState } from "react";

type Action = {
	type: any;
	value: any;
};
const initCvContext: UserData = userDataSample;
const reducer = (state: UserData, action: Action): UserData => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export const CvContext = createContext({
	state: initCvContext,
	dispatch: Function as Dispatch<any>,
	editable: true,
	setEditable: (temp: boolean) => {},
});

function CvProvider({ children }: { children: JSX.Element }) {
	const [state, dispatch] = useReducer(reducer, initCvContext);
	const [editable, setEditable] = useState(true);
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
