"use client";
import { UserDataForm } from "@/components/view/editCV/_component/editCvForm";
import { CvEditContext } from "@/contexts/cvEditProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BiEdit } from "react-icons/bi";

export default function CvEditButton({ cvObjectData }: { cvObjectData: UserDataForm }) {
	const { setCvObjectData } = useContext(CvEditContext);
	const router = useRouter();
	return (
		<button
			onClick={() => {
				setCvObjectData(cvObjectData);
				router.push("/candidate/cv/edit");
			}}
			className='flex gap-1 justify-between items-center p-2 rounded-sm bg-yellow-400'
			type='button'
		>
			<BiEdit />
			<div>Chỉnh sửa</div>
		</button>
	);
}
