import { z } from "zod";

export const headSchema = z.object({
	name: z.string().min(1),
	avatar: z.string(),
	position: z.string().min(1),
	phone: z.string().min(1),
	email: z.string().min(1),
	address: z.string().min(1),
	website: z.string().min(1),
	birth: z.string().min(1),
	gender: z.string().min(1),
});
export const goalSchema = z.object({
	title: z.string().min(1),
	content: z.string().min(1),
});
export const workSchema = z.object({
	name: z.string().min(1),
	time: z.string().min(1),
	position: z.string().min(1),
	tasks: z.string().min(1),
});
export const experienceSchema = z.object({
	title: z.string(),
	works: z.array(workSchema),
});
export const productSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	time: z.string().min(1),
	where: z.string().min(1),
	member: z.string().min(1),
	position: z.string().min(1),
	tasks: z.string().min(1),
	techs: z.string().min(1),
});
export const projectSchema = z.object({
	title: z.string().min(1),
	products: z.array(productSchema),
});
export const classSchema = z.object({
	id: z.string(),
	time: z.string().min(1),
	major: z.string().min(1),
	school: z.string().min(1),
	status: z.string().min(1),
});
export const educationSchema = z.object({
	title: z.string().min(1),
	classes: z.array(classSchema),
});
export const abilitySchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	status: z.string().min(1),
});
export const skillSchema = z.object({
	title: z.string().min(1),
	skills: z.array(abilitySchema),
});

export const achievementSchema = z.object({
	id: z.string(),
	time: z.string().min(1),
	name: z.string().min(1),
	where: z.string().min(1),
});

export const badgeSchema = z.object({
	title: z.string().min(1),
	achievements: z.array(achievementSchema),
});

export const meritSchema = z.object({
	id: z.string(),
	time: z.string().min(1),
	name: z.string().min(1),
	where: z.string().min(1),
});

export const certificateSchema = z.object({
	title: z.string().min(1),
	certificates: z.array(meritSchema),
});

export const colleagueSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	where: z.string().min(1),
	phone: z.string().min(1),
});

export const referenceSchema = z.object({
	title: z.string().min(1),
	references: z.array(colleagueSchema),
});
export const actSchema = z.object({
	id: z.string(),
	time: z.string().min(1),
	name: z.string().min(1),
	position: z.string().min(1),
	tasks: z.string().min(1),
});
export const activitySchema = z.object({
	title: z.string().min(1),
	activities: z.array(actSchema),
});
export const favoriteSchema = z.object({
	id: z.string(),
	name: z.string().min(1),
	status: z.string().min(1),
});
export const hobbySchema = z.object({
	title: z.string().min(1),
	hobbies: z.array(favoriteSchema),
});
export const otherSchema = z.object({
	title: z.string().min(1),
	content: z.string().min(1),
});
export const attrsSchema = z.object({
	head: headSchema,
	goal: goalSchema,
	experience: experienceSchema,
	project: projectSchema,
	education: educationSchema,
	skill: skillSchema,
	badge: badgeSchema,
	certificate: certificateSchema,
	reference: referenceSchema,
	activity: activitySchema,
	hobby: hobbySchema,
	other: otherSchema,
});

export const userDataSchema = z.object({
	name: z.string().min(1),
	template: z.string().min(1),
	attrs: attrsSchema,
});
