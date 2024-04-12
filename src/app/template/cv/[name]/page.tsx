"use client";

import CvRenderer from "./_component/cvRenderer";
import EditCvForm from "./_component/editCvForm";
import CvSuggestion from "./_component/cvSuggestion";

function EditTemplate({ params }: { params: { name: string } }) {
	return (
		<div className='flex h-full'>
			<EditCvForm />
			<div className='flex flex-col w-full'>
				<CvSuggestion />
				<div className='overflow-y-scroll pb-16'>
					<CvRenderer cvName={params.name} />
				</div>
			</div>
		</div>
	);
}

export default EditTemplate;
