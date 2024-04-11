import NextAuth, { DefaultSession } from "next-auth/next";

declare module "next-auth" {
	interface User {
		role: string;
	}
	interface Session {
		user: {
			_id: ObjectId;
			role: "admin" | "user";
		} & DefaultSession["user"];
	}
}
