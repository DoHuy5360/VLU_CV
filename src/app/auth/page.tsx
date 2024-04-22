"use client";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { useEffect, useState } from "react";
import { LiteralUnion } from "react-hook-form";
import { BuiltInProviderType } from "next-auth/providers/index";
import SignInButton from "./_component/signInButton";
import SignInWithVLJ from "./_component/signInWithVLJ";

export default function SignIn() {
	// const session = await getServerSession(authOptions);

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	// if (session) {
	// 	return { redirect: { destination: "/home" } };
	// }

	const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
	useEffect(() => {
		(async () => {
			setProviders((await getProviders()) ?? null);
		})();
	}, []);
	return (
		providers !== null && (
			<div className='grid place-items-center h-dvh'>
				<div className='flex flex-col gap-4 p-20 border-[1px] border-slate-200 w-fit items-center'>
					{providers["azure-ad"].id && (
						<SignInButton name='Microsoft' handleClick={() => signIn("azure-ad")} logoSrc='/image/logo/microsoft_logo.webp' />
					)}
					<div>- Hoặc -</div>
					{providers.credentials.id && <SignInWithVLJ />}
				</div>
			</div>
		)
	);
}
