"use client";
import { ClientSafeProvider, getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { useEffect, useState } from "react";
import { LiteralUnion } from "react-hook-form";
import { BuiltInProviderType } from "next-auth/providers/index";
import SignInButton from "./_component/signInButton";
import SignInWithVLJ from "./_component/signInWithVLJ";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
	// const session = await getServerSession(authOptions);

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	// if (session) {
	// 	return { redirect: { destination: "/home" } };
	// }
	const searchParams = useSearchParams();

	const prePage = searchParams.get("pre");

	const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
	useEffect(() => {
		(async () => {
			setProviders((await getProviders()) ?? null);
		})();
	}, []);
	return (
		providers !== null && (
			<div className='relative'>
				<Link href={`/${prePage || "/"}`} className='absolute left-0 top-0 flex items-center gap-1 p-2 hover:text-orange-500'>
					<IoIosArrowBack />
					<div>Back</div>
				</Link>
				<div className='grid place-items-center h-dvh'>
					<div className='flex flex-col gap-4 p-20 border-[1px] border-slate-200 w-fit items-center'>
						{providers["azure-ad"].id && (
							<SignInButton name='Microsoft' handleClick={() => signIn("azure-ad")} logoSrc='/image/logo/microsoft_logo.webp' />
						)}
						<div>- Hoặc -</div>
						{providers.credentials.id && <SignInWithVLJ />}
					</div>
				</div>
			</div>
		)
	);
}
