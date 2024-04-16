import { CvAction } from "@/contexts/cvProvider";

export const deleteExperienceAction = (
	index: number = 0
): CvAction => ({
	type: "delete-experience",
	index,
});
export const deleteProjectAction = (index: number = 0): CvAction => ({
	type: "delete-project",
	index,
});
export const deleteEducationAction = (
	index: number = 0
): CvAction => ({
	type: "delete-education",
	index,
});
export const deleteSkillAction = (index: number = 0): CvAction => ({
	type: "delete-skill",
	index,
});
export const deleteBadgeAction = (index: number = 0): CvAction => ({
	type: "delete-badge",
	index,
});
export const deleteCertificationAction = (
	index: number = 0
): CvAction => ({
	type: "delete-certificate",
	index,
});
export const deleteReferenceAction = (
	index: number = 0
): CvAction => ({
	type: "delete-reference",
	index,
});
export const deleteActivityAction = (
	index: number = 0
): CvAction => ({
	type: "delete-activity",
	index,
});
export const deleteHobbyAction = (index: number = 0): CvAction => ({
	type: "delete-hobby",
	index,
});
