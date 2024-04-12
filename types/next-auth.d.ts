import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {
	interface User {
		_id: string;
		role: string;
	}
	interface Session {
		user: {
			_id: string;
			role: "admin" | "user";
		} & DefaultSession["user"];
	}
}
