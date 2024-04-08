"use client";
import { addNewCV } from "@/actions/admin/addNewCV";
import Submit from "@/components/button/submit";
import { useEffect, useRef, useState } from "react";

function imageFileToBase64(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			const base64String = reader.result as string;
			resolve(base64String);
		};
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}
function addCV() {
	const formRef = useRef<HTMLFormElement>(null);
	const thumbnailRef = useRef<HTMLInputElement>(null);
	return (
		<div className='h-dvh grid place-items-center'>
			<div className='bg-slate-200 w-fit p-3 rounded-sm'>
				<div className='font-bold text-lg mb-3'>
					upload new template
				</div>
				<form
					ref={formRef}
					action={async (data) => {
						await addNewCV(data);
						formRef.current?.reset();
					}}
					className='flex flex-col gap-1'
				>
					<label htmlFor=''>Name</label>
					<input className='p-2' name='name' type='text' />

					<label htmlFor=''>Thumbnail</label>
					<input
						type='file'
						onChange={async (e) => {
							if (e.target.files !== null) {
								const file = e.target.files[0];
								try {
									thumbnailRef.current!.value =
										await imageFileToBase64(file);
								} catch (error) {
									console.error(
										"Error converting image to Base64:",
										error
									);
								}
							}
						}}
					/>
					<input ref={thumbnailRef} name='thumbnail' type='hidden' />
					<Submit />
				</form>
				{/* {cvs.map((cv) => {
					return <div key={cv._id}>{cv.name}</div>;
				})} */}
			</div>
		</div>
	);
}

export default addCV;