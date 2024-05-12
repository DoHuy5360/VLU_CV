import { getTimeId } from "@/utils/getTimeId";

export const experienceFormSample = () => ({
	id: getTimeId(),
	name: "",
	time: "",
	position: "",
	tasks: "",
	images: [],
});
export const aboutImageFormSample = () => ({
	id: getTimeId(),
	label: "",
	src: "",
});
export const skillFormSample = () => ({
	id: getTimeId(),
	icon: "",
	name: "",
});
export const projectFormSample = () => ({
	id: getTimeId(),
	name: "",
	time: "",
	technologies: [],
	images: [],
	tasks: "",
});
export const projectTechnologiesFormSample = () => ({
	id: getTimeId(),
	icon: "",
	name: "",
});
