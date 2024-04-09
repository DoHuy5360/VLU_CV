"use client";

import { createReplica } from "@/actions/candidate/createReplica";
import HomeLayout from "@/components/layouts/app/home";
import { CvContext } from "@/contexts/cvProvider";
import { Transfer } from "@/types/tranfer";
import {
	ChangeEvent,
	memo,
	useCallback,
	useContext,
	useState,
} from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

const Suggestion = memo(() => {
	const [isShowSuggest, setShowSuggest] = useState(false);
	return (
		<div className='flex flex-col gap-1 p-2'>
			<div className='flex items-center gap-1'>
				<label
					className='text-xs whitespace-nowrap'
					htmlFor='suggestion'
				>
					Gợi ý
				</label>
				{isShowSuggest ? (
					<div
						onClick={() => {
							setShowSuggest(false);
						}}
						className='cursor-pointer hover:bg-slate-200 p-1'
					>
						<GrFormView />
					</div>
				) : (
					<div
						onClick={() => {
							setShowSuggest(true);
						}}
						className='cursor-pointer hover:bg-slate-200 p-1'
					>
						<GrFormViewHide />
					</div>
				)}
			</div>
			{isShowSuggest && (
				<textarea
					className='p-2 w-full border-slate-200 border-[1px] outline-none resize-none'
					id='suggestion'
					rows={5}
					name=''
				></textarea>
			)}
		</div>
	);
});
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
				index,
			});
		},
		[]
	);
	return (
		<div className='flex items-center gap-1'>
			{name && (
				<label className='text-xs cursor-pointer' htmlFor={name}>
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
					id={name}
				/>
			) : (
				<textarea
					name={name}
					id={name}
					className='border-slate-200 border-[1px] p-2 text-xs resize-none h-36 w-full'
					onChange={f}
					value={value}
				></textarea>
			)}
		</div>
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
function EditUserInfo() {
	const { state } = useContext(CvContext);
	return (
		<form
			className='w-2/3 p-2 flex flex-col gap-2 justify-between overflow-y-scroll border-slate-300 border-r-[1px]'
			action={async () => {
				await createReplica(state);
			}}
		>
			<div className='flex flex-col gap-2'>
				<Group label='Basic Information'>
					<div className='flex flex-col gap-2'>
						<EditInput
							name='Position:'
							inputType='input'
							editType='update-user-position'
							value={state.attrs.head.position}
						/>
						<EditInput
							name='Name:'
							inputType='input'
							editType='update-user-name'
							value={state.attrs.head.name}
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
								<div className='text-xs flex flex-col gap-2 border-[1px] border-slate-200 p-1'>
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
				className='w-fit px-4 py-2 bg-green-300 rounded-lg text-xs'
				type='submit'
			>
				Save
			</button>
		</form>
	);
}

function EditTemplate({ params }: { params: { id: string } }) {
	const { state } = useContext(CvContext);
	return (
		<div className='flex h-full'>
			<EditUserInfo />
			<div className='flex flex-col w-full'>
				<Suggestion />
				<div className='overflow-y-scroll pb-16'>
					{Transfer[params.id](state)}
				</div>
			</div>
		</div>
	);
}

export default EditTemplate;
