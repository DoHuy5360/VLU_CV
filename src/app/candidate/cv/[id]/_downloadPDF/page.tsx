"use client";

import { useCallback, useRef, useState } from "react";

export default function DownloadPDF() {
	const [isFetch, setFetch] = useState(false);
	const downloadPdf = useCallback(async () => {
		console.log("fetch");
		// setFetch(true);
		const response = await fetch(
			"https://api.tailwindstream.io/public",
			{
				method: "POST",
				body: JSON.stringify({
					html: document.getElementById("cvWrapper")?.innerHTML,
					format: "a4", // "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6"
				}),
				headers: { "Content-Type": "application/json" },
			}
		);

		if (response.ok) {
			const blob = await response.blob();
			downloadToBrowser(blob);
		} else {
			const { error } = await response.json();
			console.log(error);
		}
	}, []);
	const downloadToBrowser = useCallback((blob: Blob) => {
		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "generated.pdf";
		document.body.appendChild(a);
		a.click();
		a.remove();
		// setFetch(false);
	}, []);
	return (
		<div className='py-0.5 px-1 border-l-[1px] border-slate-200'>
			<button
				disabled={isFetch}
				onClick={downloadPdf}
				className='select-none text-xs h-fit py-0.5 px-1 rounded-sm text-white bg-orange-600'
				type='button'
			>
				Download PDF
			</button>
		</div>
	);
}
