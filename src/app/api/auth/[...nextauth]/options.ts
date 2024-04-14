import clientPromise from "@/libs/mongodb";
import { connectToDatabase } from "@/libs/mongoosedb";
import CV from "@/models/cv";
import User from "@/models/user";
import { userDataSample } from "@/types/userData";
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
			profile(profile) {
				return {
					...profile,
					id: profile.sub,
					role: profile.role ?? "user",
				};
			},
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
				email: {
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
				// const user = await fetch("/", {
				// 	method: "POST",
				// 	headers: {
				// 		"Content-Type": "application/json",
				// 	},
				// 	body: JSON.stringify({
				// 		name: credentials?.username,
				// 		password: credentials?.password,
				// 	}),
				// });
				// This is where you need to retrieve user data
				// to verify with credentials
				// Docs: https://next-auth.js.org/configuration/providers/credentials
				const user = {
					_id: "",
					id: "01",
					name: "Admin",
					email: "cocdh123@gmail.com",
					password: "1",
					role: "admin",
					image:
						"https://cdn.discordapp.com/attachments/876588087210291211/1089358306776207380/1b1bb78dfc0e94143e21ca475c2b0f65--plants-vs-zombies-removebg-preview.png?ex=662469fb&is=6611f4fb&hm=8c6d9f04de28736c9ca2f0f5d1b48988c714d0c0780f3de380485c4e7716f00e&",
				};

				if (
					credentials?.email === user.email &&
					credentials?.password === user.password
				) {
					return user;
				} else {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			await connectToDatabase();
			const userFound = await User.findOne({ email: user.email });
			// console.log("user found", userFound);
			if (userFound === null) {
				const data = {
					name: user.name,
					email: user.email,
					role: user.role,
					image: user.image,
					dataCV: userDataSample,
				};
				const newUser = new User(data);
				const result = await newUser.save();
				user._id = result._id;
			} else {
				user._id = userFound._id;
			}
			return true;
		},
		async jwt({ token, user }) {
			if (user) {
				token._id = user._id;
				token.role = user.role;
			}
			// console.log("option 72", token);
			return token;
		},
		async session({ session, token, user }) {
			session.user._id = token._id;
			return session;
		},
	},
	// adapter: MongoDBAdapter(clientPromise) as Adapter,
	debug: false,
};
