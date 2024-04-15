import { CvAction } from "@/contexts/cvProvider";

const getTimeId = () => new Date().getTime().toString();

export const experience = (): CvAction => ({
	type: "add-experience",
	value: {
		id: getTimeId(),
		name: "",
		time: "",
		position: "",
		tasks: "",
	},
	index: 0,
});
export const experienceForm = (): CvAction => ({
	type: "add-experience",
	value: {
		id: getTimeId(),
		name: "",
		time: "",
		position: "",
		tasks: "",
	},
	index: 0,
});
