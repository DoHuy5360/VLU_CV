"use client";
import HomeLayout from "@/components/layouts/app/home";
import { de } from "../cv/[id]/page";
import {
	MouseEventHandler,
	useCallback,
	useEffect,
	useState,
} from "react";

function Page() {
	const [currentTab, setCurrentTab] = useState("");
	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		const savedState = queryParams.get("tab");
		if (savedState) {
			setCurrentTab(JSON.parse(savedState));
		}
	}, []);
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
		<HomeLayout>
			<div className='grid grid-cols-[150px_auto] h-full'>
				<div className='border-r-[1px] border-slate-200 h-full'>
					<TabButton
						onClick={() => {
							setFootprint("profile");
							setCurrentTab("profile");
						}}
						name='Profile'
					/>

					<TabButton
						name='Experience'
						onClick={() => {
							setFootprint("experience");
							setCurrentTab("experience");
						}}
					/>
					<TabButton
						name='Project'
						onClick={() => {
							setFootprint("project");
							setCurrentTab("project");
						}}
					/>
					<TabButton
						name='Certificate & Badge'
						onClick={() => {
							setFootprint("certificate & badge");
							setCurrentTab("certificate & badge");
						}}
					/>
					<TabButton
						name='Activity'
						onClick={() => {
							setFootprint("activity");
							setCurrentTab("activity");
						}}
					/>
				</div>
				<div className='overflow-hidden'>
					{currentTab === "profile" && (
						<div className=''>
							<Profile />
						</div>
					)}
				</div>
			</div>
		</HomeLayout>
	);
}
function TabButton({
	name,
	onClick,
}: {
	name: string;
	onClick: MouseEventHandler<HTMLDivElement>;
}) {
	return (
		<div
			onClick={onClick}
			className='hover:bg-slate-100 cursor-pointer p-2'
		>
			{name}
		</div>
	);
}

function Profile() {
	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='w-28 h-28 rounded-full overflow-hidden'>
				<img src={de.attrs.head.avatar} alt='avatar' />
			</div>
			<div className='text-sm flex gap-2 flex-wrap'>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='name'
					>
						Name
					</label>
					<input
						id='name'
						value={de.attrs.head.name}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='birth'
					>
						Birth
					</label>
					<input
						id='birth'
						value={de.attrs.head.birth}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='position'
					>
						Position
					</label>
					<input
						id='position'
						value={de.attrs.head.position}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='phone'
					>
						Phone
					</label>
					<input
						id='phone'
						value={de.attrs.head.phone}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='email'
					>
						Email
					</label>
					<input
						id='email'
						value={de.attrs.head.email}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='address'
					>
						Address
					</label>
					<input
						id='address'
						value={de.attrs.head.address}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='website'
					>
						Website
					</label>
					<input
						id='website'
						value={de.attrs.head.website}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='birth'
					>
						Birth
					</label>
					<input
						id='birth'
						value={de.attrs.head.birth}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='gender'
					>
						Gender
					</label>
					<input
						id='gender'
						value={de.attrs.head.gender}
						className='border-slate-200 border-[1px] p-1'
						type='text'
					/>
				</div>
			</div>
			<div className='flex justify-end'>
				<button
					className='bg-green-300 px-4 py-2 rounded-full text-sm '
					type='button'
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default Page;
