"use client";
import { useEffect, useState } from "react";

import Tab from "./_component/tab";
import View from "./_component/view";

const tabs = ["Personal", "Goal", "Education", "Skill", "Experience", "Project", "Certificate", "Badge", "Activity", "Reference", "Hobby", "Other"];

export default () => {
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		setCurrentTab(JSON.parse(savedState as string));
	}, []);

	if (currentTab === null) return <div>Loading...</div>;

	return (
		<div className='grid grid-cols-[150px_auto] h-full'>
			<div className='border-r-[1px] border-slate-200 h-full'>
				{tabs.map((t, i) => (
					<Tab key={i} name={t} setCurrentTab={setCurrentTab} toggle={currentTab} />
				))}
			</div>
			<View name={currentTab} />
		</div>
	);
};
