"use client";
import { SessionProvider } from "next-auth/react";
import PreHandler from "../_component/preHandler";
import { Suspense } from "react";

export default function SignIn() {
	return (
		<SessionProvider>
			<Suspense fallback={<div>Loading...</div>}>
				<PreHandler />
			</Suspense>
		</SessionProvider>
	);
}
