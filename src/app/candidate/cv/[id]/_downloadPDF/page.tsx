"use client";

import { useCallback, useRef, useState } from "react";
const apiUrl = "https://api.tailwindstream.io";
export default function DownloadPDF() {
	const [isFetch, setFetch] = useState(false);
	const downloadPdf = useCallback(async () => {
		console.log("fetch");
		// setFetch(true);
		const response = await fetch(`${apiUrl}/request`, {
			method: "POST",
			body: JSON.stringify({
				html: document.getElementById("cvWrapper")?.innerHTML,
				format: "A4", // "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6"
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			// const blob = await response.blob();
			const res = (await response.json()) as {
				requestId?: string;
				error?: string;
			};
			if (res.requestId) {
				downloadWithRetry(res.requestId);
			} else {
				console.log(res.error);
			}
			// downloadToBrowser(blob);
		} else {
			const { error } = await response.json();
			console.log(error);
		}
	}, []);
	// Main retry logic
	const RETRY_INTERVAL_MS = 2500;
	const MAX_RETRIES = 4;

	async function downloadWithRetry(requestId: string) {
		let retried = 0;
		const intervalId = setInterval(async () => {
			const response = await fetch(
				`${apiUrl}/request/${requestId}/download`
			);
			if (response.ok) {
				const blob = await response.blob();
				clearInterval(intervalId);
				downloadToBrowser(blob);
			} else {
				retried++;
				if (retried >= MAX_RETRIES) {
					clearInterval(intervalId);
				}
				console.error("Download failed, retrying...");
			}
		}, RETRY_INTERVAL_MS);
	}
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
				className='w-fit select-none text-xs h-fit py-0.5 px-1 rounded-sm text-white bg-orange-600'
				type='button'
			>
				Download PDF
			</button>
		</div>
	);
}
