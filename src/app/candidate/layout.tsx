import CandidateLayout from "@/components/layouts/candidateLayout";

export default async function Layout({ children }: { children: JSX.Element }) {
	return <CandidateLayout>{children}</CandidateLayout>;
}
