"use client";

import HomeLayout from "@/components/layouts/app/home";
import Link from "next/link";
import { useEffect, useState } from "react";

type TemplateCV = {
	id: String;
	name: String;
	created: String;
};

function CV() {
	const [cvs, setCVs] = useState<TemplateCV[]>([]);
	useEffect(() => {
		// get all my cv
		setCVs([
			{
				id: "1",
				name: "Web developer",
				created: "12/12/2024",
			},
			{
				id: "2",
				name: "Back-end developer",
				created: "12/12/2024",
			},
		]);
	}, []);
	return (
		<HomeLayout>
			<div className='flex flex-col'>
				{cvs.map((cv, index) => (
					<div
						key={index}
						className='grid grid-cols-[20px_auto_100px] p-1 hover:bg-slate-200'
					>
						<div>{index + 1}</div>
						<Link
							className='underline hover:text-blue-500'
							href={`/candidate/cv/${cv.id}`}
						>
							{cv.name}
						</Link>
						<div>{cv.created}</div>
					</div>
				))}
			</div>
		</HomeLayout>
	);
}

export default CV;
