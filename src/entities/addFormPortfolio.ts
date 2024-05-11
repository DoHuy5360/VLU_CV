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
