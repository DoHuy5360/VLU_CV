import clientPromise from "@/libs/mongodb";
import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import User from "@/models/user";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { Client } from "@microsoft/microsoft-graph-client";
import mongoose from "mongoose";
import NextAuth, { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID as string,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
			// tenantId: process.env.AZURE_AD_TENANT_ID,
			// authorization: {
			// 	params: {
			// 		scope: "User.Read User.Read.All offline_access",
			// 	},
			// },
		}),
		CredentialsProvider({
			name: "VLU CV account",
			credentials: {
				username: {
					label: "Email",
					type: "text",
					placeholder: "Email",
				},
				password: {
					label: "Password",
					type: "password",
					placeholder: "Password",
				},
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				// const user = {
				// 	id: "1",
				// 	name: "J Smith",
				// 	email: "jsmith@example.com",
				// };
				const user = await fetch("/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: credentials?.username,
						password: credentials?.password,
					}),
				});

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user.json();
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
	],
	session: {
		strategy: "database",
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user = user;
			return session;
		},
	},
	adapter: MongoDBAdapter(clientPromise) as Adapter,
	debug: false,
};
