import { z } from "zod";

const messages = {
	required: "Hãy điền thông tin cho mục này.",
};

export const headSchema = z.object({
	name: z.string().min(1, messages.required),
	position: z.string().min(1, messages.required),
	phone: z.string().min(1, messages.required),
	email: z.string().min(1, messages.required),
	avatar: z.string(),
	address: z.string(),
	website: z.string(),
	birth: z.string(),
	gender: z.string(),
});
export const goalSchema = z.object({
	title: z.string().min(1, messages.required),
	content: z.string().min(1, messages.required),
});
export const workSchema = z.object({
	id: z.string(),
	name: z.string().min(1, messages.required),
	time: z.string().min(1, messages.required),
	position: z.string().min(1, messages.required),
	tasks: z.string().min(1, messages.required),
});
export const experienceSchema = z.object({
	title: z.string(),
	works: z.array(workSchema),
});
export const productSchema = z.object({
	id: z.string(),
	name: z.string().min(1, messages.required),
	time: z.string().min(1, messages.required),
	where: z.string().min(1, messages.required),
	member: z.string().min(1, messages.required),
	position: z.string().min(1, messages.required),
	tasks: z.string().min(1, messages.required),
	techs: z.string().min(1, messages.required),
});
export const projectSchema = z.object({
	title: z.string().min(1, messages.required),
	products: z.array(productSchema),
});
export const classSchema = z.object({
	id: z.string(),
	time: z.string().min(1, messages.required),
	major: z.string().min(1, messages.required),
	school: z.string().min(1, messages.required),
	status: z.string().min(1, messages.required),
});
export const educationSchema = z.object({
	title: z.string().min(1, messages.required),
	classes: z.array(classSchema),
});
export const abilitySchema = z.object({
	id: z.string(),
	name: z.string().min(1, messages.required),
	status: z.string().min(1, messages.required),
});
export const skillSchema = z.object({
	title: z.string().min(1, messages.required),
	skills: z.array(abilitySchema),
});

export const achievementSchema = z.object({
	id: z.string(),
	time: z.string().min(1, messages.required),
	name: z.string().min(1, messages.required),
	where: z.string().min(1, messages.required),
});

export const badgeSchema = z.object({
	title: z.string().min(1, messages.required),
	achievements: z.array(achievementSchema),
});

export const meritSchema = z.object({
	id: z.string(),
	time: z.string().min(1, messages.required),
	name: z.string().min(1, messages.required),
	where: z.string().min(1, messages.required),
});

export const certificateSchema = z.object({
	title: z.string().min(1, messages.required),
	certificates: z.array(meritSchema),
});

export const colleagueSchema = z.object({
	id: z.string(),
	name: z.string().min(1, messages.required),
	where: z.string().min(1, messages.required),
	phone: z.string().min(1, messages.required),
});

export const referenceSchema = z.object({
	title: z.string().min(1, messages.required),
	references: z.array(colleagueSchema),
});
export const actSchema = z.object({
	id: z.string(),
	time: z.string().min(1, messages.required),
	name: z.string().min(1, messages.required),
	position: z.string().min(1, messages.required),
	tasks: z.string().min(1, messages.required),
});
export const activitySchema = z.object({
	title: z.string().min(1, messages.required),
	activities: z.array(actSchema),
});
export const favoriteSchema = z.object({
	id: z.string(),
	name: z.string().min(1, messages.required),
	status: z.string().min(1, messages.required),
});
export const hobbySchema = z.object({
	title: z.string().min(1, messages.required),
	hobbies: z.array(favoriteSchema),
});
export const otherSchema = z.object({
	title: z.string().min(1, messages.required),
	content: z.string(),
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
	name: z.string().min(1, messages.required),
	template: z.string().min(1, messages.required),
	attrs: attrsSchema,
});
export const userProfileDataSchema = z.object({
	name: z.string(),
	template: z.string(),
	attrs: attrsSchema,
});
