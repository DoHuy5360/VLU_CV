"use client";
import { useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";

export default function CvSuggestion() {
	const [isShowSuggest, setShowSuggest] = useState(false);
	return (
		<div className='flex flex-col gap-1 p-2 border-b-[1px]'>
			<div className='flex items-center gap-1'>
				<label className='text-xs whitespace-nowrap' htmlFor='suggestion'>
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
			{isShowSuggest && <textarea className='p-2 w-full border-slate-200 border-[1px] outline-none resize-none' id='suggestion' rows={5} name=''></textarea>}
		</div>
	);
}
