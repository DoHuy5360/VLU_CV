import HomeLayout from "@/components/layouts/app/home";
import CvProvider from "@/contexts/cvProvider";

export default async ({ children }: { children: JSX.Element }) => {
	return (
		<HomeLayout>
			<CvProvider>{children}</CvProvider>
		</HomeLayout>
	);
};
