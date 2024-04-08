import HomeLayout from "@/components/layouts/app/home";
import { useContext, useEffect, useReducer, useState } from "react";
import A01Template from "@/components/layouts/templates/a01Template";
import A02Template from "@/components/layouts/templates/a02Template";
import CvProvider, { CvContext } from "@/contexts/cvProvider";
import { Transfer } from "@/types/tranfer";
import User_CV from "@/models/user_cv";
import { connectToDatabase } from "@/libs/mongoosedb";
import DownloadPDF from "@/components/downloadPDF";

async function ViewCV({ params }: { params: { id: string } }) {
	await connectToDatabase();
	const cv = await User_CV.findOne({
		_id: params.id,
	});
	return (
		<div className='flex'>
			<div id='cvWrapper' className='w-fit bg-slate-200'>
				{Transfer[cv.data.template](cv.data)}
			</div>
			<DownloadPDF />
		</div>
	);
}

export default ViewCV;
