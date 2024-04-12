"use client";
import { useEffect, useState } from "react";

import Tab from "./_component/tab";
import View from "./_component/view";

export default () => {
	const [currentTab, setCurrentTab] = useState<string | null>(null);
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		setCurrentTab(JSON.parse(savedState as string));
	}, []);

	return currentTab === null ? (
		<div>Loading...</div>
	) : (
		<div className='grid grid-cols-[150px_auto] h-full'>
			<div className='border-r-[1px] border-slate-200 h-full'>
				<Tab
					name='Information'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
				<Tab
					name='Experience'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
				<Tab
					name='Project'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
				<Tab
					name='Certificate'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
				<Tab
					name='Education'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
				<Tab
					name='Badge'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
				<Tab
					name='Activity'
					setCurrentTab={setCurrentTab}
					toggle={currentTab}
				/>
			</div>
			<View name={currentTab} />
		</div>
	);
};
