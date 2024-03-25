"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";

function Header() {
	const { data: session, status } = useSession();
	const loading = status === "loading";
	return (
		<header>
			<div className='block min-h-16'>
				<p
					className={`opacity-100 top-0 ${
						!session && loading
							? "relative overflow-hidden rounded-sm p-2 m-0  top-[-2rem] opacity-0"
							: "relative top-0 opacity-100 overflow-hidden rounded-sm p-2 m-0 "
					}`}
				>
					{!session && (
						<>
							<span className=''>You are not signed in</span>
							<a
								href={`/api/auth/signin`}
								className=''
								onClick={(e) => {
									e.preventDefault();
									signIn();
								}}
							>
								Sign in
							</a>
						</>
					)}
					{session?.user && (
						<>
							{session.user.image && (
								<span
									style={{
										backgroundImage: `url('${session.user.image}')`,
									}}
									className=''
								></span>
							)}
							<span className=''>
								<small>Signed in as</small>
								<br />
								<strong>{session.user.email}</strong>
								<strong>{session.user.name}</strong>
							</span>
							<a
								href={`/api/auth/signout`}
								className=''
								onClick={(e) => {
									e.preventDefault();
									signOut();
								}}
							>
								Sign Out
							</a>
						</>
					)}
				</p>
			</div>
		</header>
	);
}
function Layout({ children }: { children: JSX.Element }) {
	return (
		<div>
			<Header />
			<main>{children}</main>
		</div>
	);
}

export default Layout;
