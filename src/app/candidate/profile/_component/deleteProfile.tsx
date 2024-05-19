"use client";
import { deleteProfile } from "@/actions/candidate/deleteProfile";
import { Buttons } from "@/components/button/buttons";

export default function DeleteProfile({ name, _id }: { _id: string; name: string }) {
	return (
		<form
			action={async () => {
				const isDelete = confirm(`Xóa ${name}`);
				isDelete && (await deleteProfile(_id));
			}}
		>
			<Buttons.Submit.Delete.Icon/>
		</form>
	);
}
