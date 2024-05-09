"use client";

import createCandidateProfile from "@/actions/candidate/createCandidateProfile";
import BlueCreate from "@/components/button/blueCreate";

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
			<BlueCreate />
		</form>
	);
}
