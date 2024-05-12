import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

export const ProfileTabContext = createContext<{ setCurrentTab: Dispatch<SetStateAction<string | null>>; currentTab: string }>({
	setCurrentTab: () => {},
	currentTab: "",
});

export default function ProfileTabProvider({ children }: { children: JSX.Element }) {
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		if (savedState === null) {
			setCurrentTab("Personal");
		} else {
			setCurrentTab(JSON.parse(savedState as string));
		}
	}, []);
	if (currentTab === null) return <div>Loading...</div>;
	return (
		<ProfileTabContext.Provider
			value={{
				setCurrentTab,
				currentTab,
			}}
		>
			{children}
		</ProfileTabContext.Provider>
	);
}
