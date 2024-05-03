"use client";
import { SessionProvider } from "next-auth/react";
import PreHandler from "./_component/preHandler";

export default function SignIn() {
	return (
		<SessionProvider>
			<PreHandler />
		</SessionProvider>
	);
}
