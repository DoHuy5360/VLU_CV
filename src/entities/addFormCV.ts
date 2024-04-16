import { CvAction } from "@/contexts/cvProvider";
import { getTimeId } from "@/utils/getTimeId";

export const addExperienceAction = (): CvAction => ({
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
export const addProjectAction = (): CvAction => ({
	type: "add-project",
	value: {
		id: getTimeId(),
		member: "",
		name: "",
		position: "",
		techs: "",
		tasks: "",
		time: "",
		where: "",
	},
	index: 0,
});
export const addEducationAction = (): CvAction => ({
	type: "add-education",
	value: {
		id: getTimeId(),
		major: "",
		school: "",
		status: "",
		time: "",
	},
	index: 0,
});
export const addSkillAction = (): CvAction => ({
	type: "add-skill",
	value: {
		id: getTimeId(),
		name: "",
		status: "",
	},
	index: 0,
});
export const addBadgeAction = (): CvAction => ({
	type: "add-badge",
	value: {
		id: getTimeId(),
		name: "",
		time: "",
		where: "",
	},
	index: 0,
});
export const addCertificationAction = (): CvAction => ({
	type: "add-certification",
	value: {
		id: getTimeId(),
		name: "",
		time: "",
		where: "",
	},
	index: 0,
});
export const addReferenceAction = (): CvAction => ({
	type: "add-reference",
	value: {
		id: getTimeId(),
		name: "",
		phone: "",
		where: "",
	},
	index: 0,
});
export const addActivityAction = (): CvAction => ({
	type: "add-activity",
	value: {
		id: getTimeId(),
		name: "",
		position: "",
		tasks: "",
		time: "",
	},
	index: 0,
});
export const addHobbyAction = (): CvAction => ({
	type: "add-hobby",
	value: {
		id: getTimeId(),
		name: "",
		status: "",
	},
	index: 0,
});
