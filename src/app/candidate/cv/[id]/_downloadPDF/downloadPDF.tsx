"use client";

import { Buttons } from "@/components/button/buttons";
import { useCallback, useRef, useState } from "react";
import { FiFile } from "react-icons/fi";
const apiUrl = "https://api.tailwindstream.io";
export default function DownloadPDF({ fileName }: { fileName: string }) {
	const [isFetch, setFetch] = useState(false);

	const RETRY_INTERVAL_MS = 2500;
	const MAX_RETRIES = 4;
	const downloadToBrowser = useCallback(
		(blob: Blob) => {
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement("a");
			a.href = url;
			a.download = `${fileName}.pdf`;
			document.body.appendChild(a);
			a.click();
			a.remove();
			setFetch(false);
		},
		[fileName]
	);
	const downloadWithRetry = useCallback(
		(requestId: string) => {
			let retried = 0;
			const intervalId = setInterval(async () => {
				const response = await fetch(`${apiUrl}/request/${requestId}/download`);
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
		},
		[downloadToBrowser]
	);
	const downloadPdf = useCallback(async () => {
		console.log("fetch");
		setFetch(true);
		const response = await fetch(`${apiUrl}/request`, {
			method: "POST",
			body: JSON.stringify({
				html: document.getElementById("cvWrapper")?.innerHTML,
				format: "A4", // "A0" | "A1" | "A2" | "A3" | "A4" | "A5" | "A6"
			}),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			const res = (await response.json()) as {
				requestId?: string;
				error?: string;
			};
			if (res.requestId) {
				downloadWithRetry(res.requestId);
			} else {
				console.log(res.error);
			}
		} else {
			const { error } = await response.json();
			console.log(error);
		}
	}, [downloadWithRetry]);
	return (
		<div onClick={()=>{
			if(!isFetch) downloadPdf()
		}}>
			<Buttons.Solid.Red.Click text={isFetch ? "Đang xử lý..." : "Tải PDF"}/>
		</div>
	);
}
