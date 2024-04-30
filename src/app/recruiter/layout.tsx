import RecruiterLayout from "@/components/layouts/recruiterLayout";

export default async function Layout({ children }: { children: JSX.Element }) {
	return <RecruiterLayout>{children}</RecruiterLayout>;
}
