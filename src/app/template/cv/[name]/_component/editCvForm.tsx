"use client";

import { createReplica } from "@/actions/candidate/createReplica";
import { CvContext } from "@/contexts/cvProvider";
import { ChangeEvent, useCallback, useContext } from "react";

export default function EditCvForm() {
	const { state } = useContext(CvContext);
	return state === null ? (
		<div>Loading...</div>
	) : (
		<form
			className='w-2/3 px-2 pt-2 pb-20 flex flex-col gap-2 overflow-y-scroll border-slate-300 border-r-[1px]'
			action={async () => {
				await createReplica(state);
			}}
		>
			<div className='flex flex-col gap-2'>
				<Group label='Basic Information'>
					<div className='flex flex-col gap-2'>
						<div className='flex gap-0.5 w-full'>
							<EditInput
								name='File name:'
								value={state.name}
								editType='update-file-name'
								inputType='input'
							/>
							<div className='text-xs'>.pdf</div>
						</div>
						<EditInput
							name='Your name:'
							inputType='input'
							editType='update-user-name'
							value={state.attrs.head.name}
						/>
						<EditInput
							name='Apply position:'
							inputType='input'
							editType='update-user-position'
							value={state.attrs.head.position}
						/>
						<EditInput
							name='Phone:'
							inputType='input'
							editType='update-user-phone'
							value={state.attrs.head.phone}
						/>
						<EditInput
							name='Address:'
							inputType='input'
							editType='update-user-address'
							value={state.attrs.head.address}
						/>
						<EditInput
							name='Email:'
							inputType='input'
							editType='update-user-email'
							value={state.attrs.head.email}
						/>
					</div>
				</Group>
				<Group label='Goal'>
					<EditInput
						inputType='textarea'
						editType='update-user-goal'
						value={state.attrs.goal.content}
					/>
				</Group>
				<Group label='Experience'>
					<div className='flex flex-col gap-3'>
						{state.attrs.experience.works.map((w, i) => {
							return (
								<div
									key={i}
									className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'
								>
									<EditInput
										name='Name:'
										value={w.name}
										editType='update-user-experience-name'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Time:'
										value={w.time}
										editType='update-user-experience-time'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Position:'
										value={w.position}
										editType='update-user-experience-position'
										index={i}
										inputType='input'
									/>
									<EditInput
										name='Tasks:'
										value={w.tasks}
										editType='update-user-experience-tasks'
										index={i}
										inputType='textarea'
									/>
								</div>
							);
						})}
					</div>
				</Group>
			</div>
			<button
				className='w-fit px-4 py-2 ml-auto bg-green-300 rounded-lg text-xs'
				type='submit'
			>
				Save
			</button>
		</form>
	);
}

function Group({
	label,
	children,
}: {
	label: string;
	children: JSX.Element;
}) {
	return (
		<fieldset className='border border-solid border-gray-300 p-3'>
			<legend>{label}</legend>
			{children}
		</fieldset>
	);
}
function EditInput({
	inputType,
	name,
	editType,
	index,
	value,
}: {
	inputType: "input" | "textarea";
	name?: string;
	editType: string;
	index?: number;
	value: string;
}) {
	const { dispatch } = useContext(CvContext);
	const f = useCallback(
		(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			dispatch({
				type: editType,
				value: e.target.value,
				index: index as number,
			});
		},
		[]
	);
	return (
		<div className='flex items-center gap-1 w-full'>
			{name && (
				<label
					className='text-xs cursor-pointer whitespace-nowrap'
					htmlFor={`${editType}-${index}`}
				>
					{name}
				</label>
			)}
			{inputType === "input" ? (
				<input
					className='border-slate-200 border-[1px] px-2 text-xs w-full'
					onChange={f}
					value={value}
					type='text'
					name={name}
					id={`${editType}-${index}`}
				/>
			) : (
				<textarea
					name={name}
					id={`${editType}-${index}`}
					className='border-slate-200 border-[1px] p-2 text-xs resize-none h-36 w-full'
					onChange={f}
					value={value}
				></textarea>
			)}
		</div>
	);
}
