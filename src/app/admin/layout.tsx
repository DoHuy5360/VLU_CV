import AdminLayout from "@/components/layouts/adminLayout";

export default async function Layout({ children }: { children: JSX.Element }) {
	return <AdminLayout>{children}</AdminLayout>;
}
