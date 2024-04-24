// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	// `withAuth` augments your `Request` with the user's token.
	function middleware(request: NextRequestWithAuth) {
		// console.log(request.nextUrl.pathname)
		// console.log("middleware 9:", request.nextauth.token);

		if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "admin") {
			return NextResponse.redirect(new URL("/", request.url));
		}
		if (request.nextUrl.pathname.startsWith("/recruiter") && request.nextauth.token?.role !== "recruiter") {
			return NextResponse.redirect(new URL("/", request.url));
		}
		if (request.nextUrl.pathname.startsWith("/home") && request.nextauth.token?.role === "guest") {
			return NextResponse.redirect(new URL("/identify", request.url));
		}

		// if (
		// 	(request.nextUrl.pathname.startsWith("/") &&
		// 		request.nextauth.token?.role !== "user") ||
		// 	request.nextauth.token?.role !== "admin"
		// ) {
		// 	return NextResponse.rewrite(new URL("/", request.url));
		// }
	},
	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
);

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
	matcher: ["/home/:path*", "/admin/:path*", "/recruiter/:path*"],
};
