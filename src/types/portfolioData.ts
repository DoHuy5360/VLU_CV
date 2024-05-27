import { z } from "zod";

const head = z.object({
	name: z.string(),
	avatar: z.string(),
	position: z.string(),
	phone: z.string(),
	email: z.string(),
	address: z.string(),
	website: z.string(),
	birth: z.string(),
	gender: z.string(),
});

const image = z.object({
	name: z.string(),
	src: z.string(),
});

const introduction = z.object({
	content: z.string(),
	images: z.array(image),
});

const skill = z.array(
	z.object({
		id: z.string(),
		name: z.string(),
		image: z.array(image),
	})
);
const experience = z.array(
	z.object({
		id: z.string(),
		name: z.string(),
		image: z.array(image),
	})
);

// project:
// certificate:
// social:
