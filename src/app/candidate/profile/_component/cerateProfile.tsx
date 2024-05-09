"use client";

import createCandidateProfile from "@/actions/candidate/createCandidateProfile";
import { BiPlus } from "react-icons/bi";

export default function CreateProfile() {
	return (
		<form
			action={async () => {
				const profileName = prompt("Tên hồ sơ mới là?");
				if (profileName !== null) {
					const success = await createCandidateProfile(profileName);
					success ? alert("Tạo thành công") : alert("Tạo thất bại");
				}
			}}
		>
			<button className='flex gap-1 items-center bg-blue-200 hover:bg-blue-300 active:bg-blue-200 p-2 rounded-sm' type='submit'>
				<div>Tạo mới</div>
				<BiPlus />
			</button>
		</form>
	);
}
