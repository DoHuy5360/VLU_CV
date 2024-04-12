import { MouseEventHandler, useCallback } from "react";

export default ({
	name,
	setCurrentTab,
	toggle,
}: {
	name: string;
	setCurrentTab: Function;
	toggle: string;
}) => {
	const setFootprint = useCallback((tab: string) => {
		const queryParams = new URLSearchParams(window.location.search);
		queryParams.set("tab", JSON.stringify(tab));
		window.history.replaceState(
			null,
			"",
			`?${queryParams.toString()}`
		);
	}, []);
	return (
		<div
			onClick={() => {
				setFootprint(name);
				setCurrentTab(name);
			}}
			className={`hover:bg-orange-200 cursor-pointer p-2 ${
				toggle === name && "bg-orange-400"
			}`}
		>
			{name}
		</div>
	);
};
