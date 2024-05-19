"use client";
import { deleteCV } from "@/actions/candidate/deleteCV";
import { Buttons } from "@/components/button/buttons";

export default function DeleteCV({ id, name }: { id: string; name: string }) {
	return (
		<form
			action={async (e) => {
				const isDelete = confirm(`Xóa ${name}`);
				isDelete && (await deleteCV(id));
			}}
		>
			<Buttons.Submit.Delete.Icon/>
		</form>
	);
}
