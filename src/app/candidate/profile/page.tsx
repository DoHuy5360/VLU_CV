"use client";
import {
	MouseEventHandler,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { CvContext } from "@/contexts/cvProvider";
import UserAttrReferenceInput from "@/components/cvElements/UserAttrReferenceInput";

function Page() {
	const [currentTab, setCurrentTab] = useState("information");
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
		<div className='grid grid-cols-[150px_auto] h-full'>
			<div className='border-r-[1px] border-slate-200 h-full'>
				<TabButton
					onClick={() => {
						setFootprint("information");
						setCurrentTab("information");
					}}
					name='Information'
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
			<div className='overflow-scroll'>
				{currentTab === "information" && (
					<div className=''>
						<Information />
					</div>
				)}
				{currentTab === "experience" && (
					<div className=''>
						<Experience />
					</div>
				)}
			</div>
		</div>
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

function Information() {
	const { state } = useContext(CvContext);

	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='w-28 h-28 rounded-full overflow-hidden'>
				<img
					src={state.attrs.head.avatar}
					alt='avatar'
					draggable='false'
				/>
			</div>
			<div className='text-sm flex gap-2 flex-wrap'>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='name'
					>
						Name
					</label>
					<UserAttrReferenceInput
						id='name'
						value={state.attrs.head.name}
						type='update-user-name'
						className='border-slate-200 border-[1px] p-1'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<label
						className='text-xs font-bold text-slate-400'
						htmlFor='birth'
					>
						Birth
					</label>
					<UserAttrReferenceInput
						id='birth'
						value={state.attrs.head.birth}
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
					<UserAttrReferenceInput
						id='position'
						value={state.attrs.head.position}
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
					<UserAttrReferenceInput
						id='phone'
						value={state.attrs.head.phone}
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
					<UserAttrReferenceInput
						id='email'
						value={state.attrs.head.email}
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
					<UserAttrReferenceInput
						id='address'
						value={state.attrs.head.address}
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
					<UserAttrReferenceInput
						id='website'
						value={state.attrs.head.website}
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
					<UserAttrReferenceInput
						id='gender'
						value={state.attrs.head.gender}
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
function Experience() {
	const { state } = useContext(CvContext);
	return (
		<div className='flex flex-col gap-2 p-4'>
			<div className='text-sm flex gap-2 flex-wrap'>
				{state.attrs.experience.works.map((w, i) => {
					return (
						<div
							key={i}
							className='flex flex-col gap-2 bg-slate-100 p-2 w-full'
						>
							<div className='flex flex-col gap-1'>
								<label
									className='text-xs text-slate-500'
									htmlFor='name'
								>
									Name
								</label>
								<input
									id='name'
									value={w.name}
									className='border-slate-200 border-[1px] p-1'
									type='text'
								/>
							</div>
							<div className='flex flex-col gap-1'>
								<label
									className='text-xs text-slate-500'
									htmlFor='position'
								>
									Position
								</label>
								<input
									id='position'
									value={w.position}
									className='border-slate-200 border-[1px] p-1'
									type='text'
								/>
							</div>
							<div className='flex flex-col gap-1'>
								<label
									className='text-xs text-slate-500'
									htmlFor='time'
								>
									Time
								</label>
								<input
									id='time'
									value={w.time}
									className='border-slate-200 border-[1px] p-1'
									type='text'
								/>
							</div>
							<div className='flex flex-col gap-1'>
								<label
									className='text-xs text-slate-500'
									htmlFor='tasks'
								>
									Tasks
								</label>
								<textarea id='tasks' className='resize-none h-20 p-2'>
									{w.tasks}
								</textarea>
							</div>
						</div>
					);
				})}
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
