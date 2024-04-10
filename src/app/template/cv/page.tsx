// "use client";
import HomeLayout from "@/components/layouts/app/home";
import A01Template from "@/components/layouts/templates/a01Template";
import { CvContext } from "@/contexts/cvProvider";
import useTemplates from "@/hooks/useTemplates";
import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";

type Template = {
	_id: string;
	name: string;
	thumbnail: string;
};

async function allCV() {
	await connectToDatabase();
	const data = await CV.find({});
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-rows-3 gap-4 p-4'>
			{data.map((t: Template) => {
				return (
					<div
						key={t._id}
						className='flex flex-col gap-1 border-[1px] border-slate-200'
					>
						<div className='bg-white'>
							<img
								src={t.thumbnail}
								className='aspect-square object-cover'
								alt='thumbnail'
								draggable='false'
								loading='lazy'
							/>
						</div>
						<Link
							className='text-center py-2 bg-slate-200 hover:bg-slate-300'
							href={`/template/cv/${t.name}`}
						>
							{t.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default allCV;
