"use client";

import { createReplica } from "@/actions/candidate/createReplica";
import HomeLayout from "@/components/layouts/app/home";
import { CvContext } from "@/contexts/cvProvider";
import { Transfer } from "@/types/tranfer";
import { memo, useContext, useState } from "react";
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

function EditUserInfo() {
	const { state, dispatch } = useContext(CvContext);
	return (
		<form
			className='p-2 flex flex-col gap-2 justify-between border-slate-300 border-r-[1px]'
			action={async () => {
				await createReplica(state);
			}}
		>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col'>
					<label className='text-xs cursor-pointer' htmlFor='name'>
						Name
					</label>
					<input
						className='border-slate-200 border-[1px] px-2'
						onChange={(e) => {
							dispatch({
								type: "update-user-name",
								value: e.target.value,
							});
						}}
						value={state.attrs.head.name}
						type='text'
						name=''
						id='name'
					/>
				</div>
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
			<div className='flex flex-col'>
				<Suggestion />
				<div className='overflow-y-scroll pb-16'>
					{Transfer[params.id](state)}
				</div>
			</div>
		</div>
	);
}

export default EditTemplate;
