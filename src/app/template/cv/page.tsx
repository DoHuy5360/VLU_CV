"use client";
import HomeLayout from "@/components/layouts/app/home";
import A01Template from "@/components/layouts/templates/a01Template";
import { CvContext } from "@/contexts/cvProvider";
import useTemplates from "@/hooks/useTemplates";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";

type Template = {
	name: string;
	thumbnail: string;
};

function CV() {
	const { data, error, isLoading } = useTemplates();
	return (
		<HomeLayout>
			{data ? (
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-rows-3 gap-4 p-4'>
					{data.map((t: Template, i: number) => {
						return (
							<div
								key={i}
								className='flex flex-col gap-1 bg-slate-200'
							>
								<div className=''>
									<img
										src={t.thumbnail}
										className='aspect-square object-cover'
										alt='thumbnail'
										draggable='false'
										loading='lazy'
									/>
								</div>
								<Link href={`/template/cv/${t.name}`}>
									Use this template
								</Link>
							</div>
						);
					})}
				</div>
			) : isLoading ? (
				<>Loading</>
			) : (
				<>{error}</>
			)}
		</HomeLayout>
	);
}

export default CV;
