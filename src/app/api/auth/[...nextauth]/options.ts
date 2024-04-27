import { createCandidateAccount } from "@/actions/candidate/createCandidateAccount";
import { createGuestAccount } from "@/actions/general/createGuestAccount";
import { CandidateDataForm } from "@/app/auth/_component/register/candidate";
import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";
import Candidate, { CandidateModelType } from "@/models/candidate";
import { ObjectId } from "mongodb";
import { NextAuthOptions } from "next-auth";
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
					role: profile.role,
				};
			},
			clientId: process.env.AZURE_AD_CLIENT_ID as string,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
			authorization: { params: { prompt: "login" } },
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

				if (credentials?.email === user.email && credentials?.password === user.password) {
					return user;
				} else {
					const res = await fetch("http://localhost:3000/api/account/auth", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: credentials?.email,
							password: credentials?.password,
						}),
					});
					const jsonData = await res.json();
					if (jsonData.error) {
						console.log(jsonData.message);
						return null;
					} else {
						return jsonData;
					}
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user }) {
			if (user.email === null || user.email === undefined) return false;
			await connectToDatabase();
			const accountFound: AccountModelType | null = await Account.findOne({ email: user.email });
			// console.log("user found", accountFound);
			if (accountFound === null) {
				const data: CandidateDataForm = {
					name: user.name as string,
					email: user.email as string,
					phone: "",
					gender: null,
					password: "",
					rePassword: "",
				};
				const accountCreated: AccountModelType | null = await createCandidateAccount(data);
				if (accountCreated === null) {
					return false;
				} else {
					user._id = accountCreated._id!.toString();
					user.role = "candidate"; // default role, apply for sign in only
				}
			} else {
				user._id = accountFound._id!.toString();
				user.role = accountFound.role;
			}
			return true;
		},
		async jwt({ token, user }) {
			if (user) {
				token._id = user._id;
				token.role = user.role;
			}
			return token;
		},
		async session({ session, token, user }) {
			session.user._id = token._id;
			session.user.role = token.role;
			return session;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl + "/home";
		},
	},
	// adapter: MongoDBAdapter(clientPromise) as Adapter,
	debug: false,
	pages: {
		signIn: "/auth",
	},
};
