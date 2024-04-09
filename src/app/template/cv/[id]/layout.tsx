import CvProvider from "@/contexts/cvProvider";

function Layout({ children }: { children: JSX.Element }) {
	return <CvProvider>{children}</CvProvider>;
}

export default Layout;
