"use client";

import { useCallback, useRef } from "react";

export default function DownloadPDF() {
	const apiUrl = useRef("https://api.tailwindstream.io/public");

	const downloadPdf = useCallback(async () => {
		const response = await fetch(apiUrl.current, {
			method: "POST",
			body: JSON.stringify({
				html: document.getElementById("cvWrapper")?.innerHTML,
				format: "a4", // "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6"
			}),
			headers: { "Content-Type": "application/json" },
		});

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
	}, []);
	return (
		<div className='py-0.5 px-1 border-l-[1px] border-slate-200'>
			<button
				onClick={downloadPdf}
				className='select-none text-xs h-fit py-0.5 px-1 rounded-sm text-white bg-orange-600'
				type='button'
			>
				Download PDF
			</button>
		</div>
	);
}
