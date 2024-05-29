import { z } from "zod";

export function getDataPortfolio(): PortfolioFormData {
	return {
		name: "",
		template: "Root",
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
		greeting: {
			images: [],
			content: "",
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

export const image = z.object({
	id: z.string(),
	label: z.string(),
	src: z.string(),
});
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
	images: z.array(image),
	content: z.string(),
});
const greeting = z.object({
	images: z.array(image),
	content: z.string(),
});
const skills = z.array(
	z.object({
		id: z.string(),
		icon: z.string(),
		name: z.string(),
	})
);
export type SkillDataForm = z.infer<typeof skills>;

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
		technologies: skills,
		images: z.array(image),
		tasks: z.string(),
	})
);

export const portfolioSchema = z.object({
	name: z.string(),
	template: z.string(),
	greeting,
	socials,
	personal,
	about,
	skills,
	experiences,
	projects,
});
export const portfolioSchemaRequireFull = z.object({
	name: z.string().min(1, "Hãy điền thông tin cho mục này."),
	template: z.string(),
	greeting,
	socials,
	personal,
	about,
	skills,
	experiences,
	projects,
});

export type PortfolioFormData = z.infer<typeof portfolioSchema>;
