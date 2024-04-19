import { Head, UserData } from "@/types/userData";

export const getUserDataCV = ({
	name,
	template,
	head,
}: {
	name?: string;
	template?: string;
	head?: {
		name?: string;
		avatar?: string;
		position?: string;
		phone?: string;
		email?: string;
		address?: string;
		website?: string;
		birth?: string;
		gender?: string;
	};
}): UserData => ({
	name: name || "",
	template: template || "",
	attrs: {
		head: {
			name: head?.name || "",
			avatar: head?.avatar || "",
			position: head?.position || "",
			phone: head?.phone || "",
			email: head?.email || "",
			address: head?.address || "",
			website: head?.website || "",
			birth: head?.birth || "",
			gender: head?.gender || "",
		},
		goal: {
			title: "Goal",
			content: "",
		},
		experience: {
			title: "Experience",
			works: [],
		},
		project: {
			title: "Project",
			products: [],
		},
		education: {
			title: "Education",
			classes: [],
		},
		skill: {
			title: "Skills",
			skills: [],
		},
		badge: {
			title: "Badge",
			achievements: [],
		},
		certificate: {
			title: "Certificate",
			certificates: [],
		},
		reference: {
			title: "Reference",
			references: [],
		},
		activity: {
			title: "Activity",
			activities: [],
		},
		hobby: {
			title: "Hobby",
			hobbies: [],
		},
		other: {
			title: "Other",
			content: "",
		},
	},
});
