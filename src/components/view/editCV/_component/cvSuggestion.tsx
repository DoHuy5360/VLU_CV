"use client";
import { useContext, useState } from "react";
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import { BiRefresh } from "react-icons/bi";
import getSuggestion from "@/actions/candidate/getSuggestion";
import { FormValuesContext } from "../editCV";

export default function CvSuggestion() {
	const formValues = useContext(FormValuesContext);
	const [isShowSuggest, setShowSuggest] = useState(false);
	const [suggestValue, setSuggestion] = useState("");
	return (
		<div className='flex flex-grow flex-col gap-1 p-2'>
			<div className='flex items-center gap-1'>
				<label className='text-xs whitespace-nowrap' htmlFor='suggestion'>
					Đánh giá
				</label>
				{isShowSuggest ? (
					<div className='flex items-center gap-1'>
						<div
							onClick={() => {
								setShowSuggest(false);
							}}
							className='cursor-pointer hover:bg-slate-200 p-1'
						>
							<GrFormView />
						</div>
						<form
							action={async () => {
								setSuggestion("Đang xử lý...");
								const suggestion = await getSuggestion(formValues);
								setSuggestion(suggestion.toString());
							}}
						>
							<button className='cursor-pointer hover:bg-slate-200 p-1' type='submit'>
								<BiRefresh />
							</button>
						</form>
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
			<div className={`${!isShowSuggest && "hidden p-0"} p-2 w-full border-slate-200 border-[1px] outline-none text-sm text-justify`}>{suggestValue}</div>
		</div>
	);
}
