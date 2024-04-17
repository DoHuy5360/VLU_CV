import HomeLayout from "@/components/layouts/app/home";

function Layout({ children }: { children: JSX.Element }) {
	return <HomeLayout>{children}</HomeLayout>;
}

export default Layout;
