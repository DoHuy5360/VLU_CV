import { CosineSimilarity } from "@/utils/wordVector";

export default () => {
	const de = new CosineSimilarity("Hello java language and Python language", "Hello Java and Python");
	return <div>Candidate page : {de.getSimilarity(3)}</div>;
};
