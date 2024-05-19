import { createCompletion, loadModel } from "gpt4all";
import path from "path";

//make sure u downloaded the models before going offline!
export async function aiSuggestion(params: string) {
	const model = await loadModel("orca-mini-3b-gguf2-q4_0.gguf", {
		verbose: true,
		// device: "gpu",
		// modelConfigFile: "./models3.json",
		// allowDownload: false,
		device: "cpu",
		modelPath: path.join(path.resolve(process.cwd()), "gguf/"),
	});
	const response = await createCompletion(model, params, { verbose: true});
	model.dispose();
	return response.choices[0].message;
}
