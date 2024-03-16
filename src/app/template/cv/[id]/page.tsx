"use client";
import { Transfer } from "@/app/candidate/cv/[id]/page";
import HomeLayout from "@/components/layouts/app/home";

function EditTemplate({ params }: { params: { id: string } }) {
	return (
		<HomeLayout>
			<div className='flex gap-2'>
				<div>{Transfer[params.id]()}</div>
				<div className='p-2'>
					<button
						className='w-fit px-4 py-2 bg-green-300 rounded-lg text-xs'
						type='button'
					>
						Save
					</button>
				</div>
			</div>
		</HomeLayout>
	);
}

export default EditTemplate;
