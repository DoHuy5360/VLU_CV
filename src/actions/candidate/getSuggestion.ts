"use server";

export default async function getSuggestion(data: any) {
	const { head, ...rest } = data.attrs;
	const dataFetch = await fetch(process.env.AI_REVIEW_API as string, {
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
