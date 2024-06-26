import B02Template from "@/components/layouts/templates/b02Template";
import { PortfolioFormData } from "@/entities/getDataPortfolio";
const temporaryDataPortfolio: PortfolioFormData = {
	name: "",
	template: "",
	greeting: {
		images: [
			{
				id: "Placeholder",
				label: "",
				src: "",
			},
		],
		content:
			"I am a [Name], with [number of years] years of experience in the field of software development. Throughout my career, I have been involved in many complex software projects, from design, programming, to deployment and system maintenance.",
	},
	socials: {
		email: "",
		gitHub: "",
		linkedIn: "",
	},
	personal: {
		name: "",
		address: "",
		avatar: "",
		phone: "0963758993",
	},
	about: {
		images: [
			{
				id: "Placeholder",
				label: "",
				src: "",
			},
		],
		content:
			"I am a [Name], with [number of years] years of experience in the field of software development. Throughout my career, I have been involved in many complex software projects, from design, programming, to deployment and system maintenance.",
	},
	skills: [
		{
			id: "Placeholder",
			icon: "",
			name: "React",
		},
	],
	experiences: [
		{
			id: "Placeholder",
			images: [
				{
					id: "Placeholder",
					label: "",
					src: "",
				},
			],
			name: "CTV",
			position: "Fullstack",
			tasks: "Manage",
			time: "01/01/2002",
		},
	],
	projects: [
		{
			id: "Placeholder",
			name: "",
			technologies: [
				{
					id: "Placeholder",
					icon: "",
					name: "React",
				},
			],
			images: [
				{
					id: "Placeholder",
					label: "",
					src: "",
				},
			],
			tasks: "I do all thing",
			time: "2023",
		},
	],
};
export default function page() {
	return <B02Template {...temporaryDataPortfolio} />;
}
