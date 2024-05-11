import { z } from "zod";

export function getDataPortfolio() {
	return {
		name: "",
		socials: {
			gitHub: "",
			linkedIn: "",
			email: "",
		},
		personal: {
			name: "",
			avatar: "",
			phone: "",
			address: "",
		},
		about: {
			images: [],
			content: "",
		},
		skills: [],
		experiences: [],
		projects: [],
	};
}
const name = z.string();
const socials = z.object({
	gitHub: z.string(),
	linkedIn: z.string(),
	email: z.string(),
});
const personal = z.object({
	name: z.string(),
	avatar: z.string(),
	phone: z.string(),
	address: z.string(),
});
const about = z.object({
	images: z.array(
		z.object({
			id: z.string(),
			label: z.string(),
			src: z.string(),
		})
	),
	content: z.string(),
});
const skills = z.array(
	z.object({
		id: z.string(),
		icon: z.string(),
		name: z.string(),
	})
);
export const image = z.object({
	id: z.string(),
	label: z.string(),
	src: z.string(),
});
export type ImageSchema = z.infer<typeof image>;

const experiences = z.array(
	z.object({
		id: z.string(),
		name: z.string(),
		time: z.string(),
		position: z.string(),
		images: z.array(image),
		tasks: z.string(),
	})
);

const projects = z.array(
	z.object({
		id: z.string(),
		name: z.string(),
		time: z.string(),
		technologies: z.array(
			z.object({
				label: z.string(),
				name: z.string(),
			})
		),
		images: z.array(image),
		tasks: z.string(),
	})
);

export const portfolioData = z.object({
	name,
	socials,
	personal,
	about,
	skills,
	experiences,
	projects,
});
export type PortfolioFormData = z.infer<typeof portfolioData>;
