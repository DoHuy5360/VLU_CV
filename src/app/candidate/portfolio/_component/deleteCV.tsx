"use client";
import { deletePortfolio } from "@/actions/candidate/deletePortfolio";
import { Buttons } from "@/components/button/buttons";

export default function DeleteCV({ id, name }: { id: string; name: string }) {
	return (
		<form
			action={async (e) => {
				const isDelete = confirm(`Xóa ${name}`);
				isDelete && (await deletePortfolio(id));
			}}
		>
			<Buttons.Submit.Delete.Icon/>
		</form>
	);
}
