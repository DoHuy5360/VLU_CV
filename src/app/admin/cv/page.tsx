"use client";
import { addNewCV } from "@/actions/admin/addNewCV";
import Submit from "@/components/button/submit";
import { useRef } from "react";

function addCV() {
	const ref = useRef<HTMLFormElement>(null);

	return (
		<div className='h-dvh grid place-items-center'>
			<div className='bg-slate-200 w-fit p-3 rounded-sm'>
				<div className='font-bold text-lg mb-3'>
					upload new template
				</div>
				<form
					ref={ref}
					action={async (data) => {
						await addNewCV(data);
						ref.current?.reset();
					}}
					className='flex flex-col gap-1'
				>
					<label htmlFor=''>Name</label>
					<input className='p-2' name='name' type='text' />
					<label htmlFor=''>Thumbnail</label>
					<input name='thumbnail' type='file' />
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
