import HomeLayout from "@/components/layouts/app/home";
import CvProvider from "@/contexts/cvProvider";

function Layout({ children }: { children: JSX.Element }) {
	return (
		<HomeLayout>
			<CvProvider>{children}</CvProvider>
		</HomeLayout>
	);
}

export default Layout;
