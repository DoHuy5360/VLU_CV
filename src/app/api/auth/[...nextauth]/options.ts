import { createCandidateAccount } from "@/actions/candidate/createCandidateAccount";
import { createGuestAccount } from "@/actions/general/createGuestAccount";
import { CandidateDataForm } from "@/app/auth/_component/register/candidate";
import { connectToDatabase } from "@/libs/mongoosedb";
import Account, { AccountModelType } from "@/models/account";
import Candidate, { CandidateModelType } from "@/models/candidate";
import Recruiter, { RecruiterModelType } from "@/models/recruiter";
import { ObjectId } from "mongodb";
import { NextAuthOptions, User } from "next-auth";
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
				await connectToDatabase();
				try {
					const email = credentials?.email;
					const password = credentials?.password;
					const accountFound: AccountModelType | null = await Account.findOne({ email });
					if (accountFound !== null && accountFound?.password === password) {
						switch (accountFound.role) {
							case "recruiter":
								const recruiterFound: RecruiterModelType | null = await Recruiter.findOne({ accountId: accountFound._id });
								if (recruiterFound !== null) {
									return {
										_id: recruiterFound._id?.toString(),
										id: recruiterFound._id?.toString(),
										name: recruiterFound.name,
										email: accountFound.email,
										role: accountFound.role,
										image: accountFound.image,
									} as User;
								}
							default:
								return null;
						}
					} else {
						return null;
					}
				} catch (error) {
					return null;
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
