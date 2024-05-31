"use server";

import { UserData } from "@/types/userData";

export default async function getSuggestion(data: any) {
	const { head, ...rest } = data.attrs;
	const dataFetch = await fetch("http://localhost:4000/ai", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			dataCV: rest,
		}),
	});
	const responseJson: { content: string } = await dataFetch.json();
	return responseJson.content;
}
