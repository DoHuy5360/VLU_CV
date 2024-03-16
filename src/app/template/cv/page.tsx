"use client";
import A01Template from "@/components/layouts/templates/a01Template";
import { CvContext } from "@/contexts/cvProvider";
import Link from "next/link";
import { useContext, useState } from "react";

type Template = {
	id: string;
	thumbnail: string;
};

function CV() {
	const [templates, setTemplates] = useState<Template[]>([
		{
			id: "A01Template",
			thumbnail:
				"https://images.unsplash.com/photo-1484406566174-9da000fda645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: "A02Template",
			thumbnail:
				"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: "2",
			thumbnail:
				"https://images.unsplash.com/photo-1445820200644-69f87d946277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8MXwwfHx8MA%3D%3D",
		},
		{
			id: "3",
			thumbnail:
				"https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHxlbnwwfDF8MHx8fDA%3D",
		},
		{
			id: "4",
			thumbnail:
				"https://images.unsplash.com/photo-1610629651605-0b181ad69aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHxlbnwwfDF8MHx8fDA%3D",
		},
		{
			id: "5",
			thumbnail:
				"https://images.unsplash.com/photo-1581300134629-4c3a06a31948?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDF8MHx8fDA%3D",
		},
	]);
	return (
		<div className='grid grid-cols-4 grid-rows-3 gap-4 p-4'>
			{templates.map((t, i) => {
				return (
					<div key={i} className='flex flex-col gap-1 bg-slate-200'>
						<div className=''>
							<img
								src={t.thumbnail}
								className='aspect-square object-cover'
								alt='thumbnail'
								draggable='false'
							/>
						</div>
						<Link href={`/template/cv/${t.id}`}>
							Use this template
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default CV;
