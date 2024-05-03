import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {
	interface User {
		_id: string;
		id: string;
		name: string;
		email: string;
		role: "admin" | "candidate" | "recruiter";
		image: string;
	}
	interface Session {
		user: {
			_id: string;
			role: "admin" | "candidate" | "recruiter";
		} & DefaultSession["user"];
	}
}
