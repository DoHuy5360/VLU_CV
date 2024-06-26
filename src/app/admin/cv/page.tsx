import { connectToDatabase } from "@/services/mongoosedb";
import View from "./_component/view";
import CV from "@/models/cv";
import NoData from "@/components/placeholder/noData";
import { getAllFileNameInFolder } from "@/utils/getAllFileNameInFolder";
import Portfolio from "@/models/portfolio";

const cvTemplateNames = getAllFileNameInFolder("/src/components/layouts/templates");

async function getUnAddedCvTemplate() {
	await connectToDatabase();
	const listCvTemplates = await CV.find({}).select("name");
	if (listCvTemplates === null) return null;
	const nameOnly = listCvTemplates.map((e) => e.name.toUpperCase());
	return (await cvTemplateNames).filter((e) => !nameOnly.includes(e));
}

export default async function AddCV() {
	await connectToDatabase();
	const listCvTemplates = await CV.find({}).select("name");
	const listPortfolioTemplates = await Portfolio.find({}).select("name");
	if (listCvTemplates === null) return <NoData />;
	const nameOnly = listCvTemplates.concat(listPortfolioTemplates).map((e) => e.name.toUpperCase());

	return <View fileTemplates={(await cvTemplateNames).filter((e) => !nameOnly.includes(e))} />;
}
