import { useCallback, useContext } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ProfileTabContext } from "./preHandler";
export default function Tab({ title, name, isError }: { title: string; name: string; isError: any }) {
	const { setCurrentTab, toggle } = useContext(ProfileTabContext);
	const setFootprint = useCallback((tab: string) => {
		const queryParams = new URLSearchParams(window.location.search);
		queryParams.set("tab", JSON.stringify(tab));
		window.history.replaceState(null, "", `?${queryParams.toString()}`);
	}, []);
	return (
		<div
			onClick={() => {
				setFootprint(name);
				setCurrentTab(name);
			}}
			className={`flex items-center gap-2 justify-between hover:bg-orange-200 cursor-pointer p-2 text-sm select-none ${toggle === name && "bg-orange-400"}`}
		>
			<div>{title}</div>
			{isError && (
				<div className='text-red-500 mix-blend-difference'>
					<AiOutlineExclamationCircle />
				</div>
			)}
		</div>
	);
}
