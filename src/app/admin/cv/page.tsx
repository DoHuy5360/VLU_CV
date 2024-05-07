import { connectToDatabase } from "@/libs/mongoosedb";
import View from "./_component/view";
import CV from "@/models/cv";
import NoData from "@/components/placeholder/noData";

import fs from "fs";
import path from "path";

// Đường dẫn tương đối của thư mục hiện tại
const currentDirectory = process.cwd();

// Tên thư mục cần truy cập (đường dẫn tương đối)
const folderName = "/src/components/layouts/templates";

// Tạo đường dẫn đến thư mục sử dụng đường dẫn tương đối
const directoryPath = path.join(currentDirectory, folderName);

function getCvTemplates(): Promise<string[]> {
	return new Promise((resolve, reject) => {
		fs.readdir(directoryPath, (err, files) => {
			if (err) {
				console.log("Lỗi khi đọc thư mục:", err);
				reject(err);
				return;
			}

			const templates = files.map((file) => {
				return file.split(".")[0].toUpperCase();
			});

			resolve(templates);
		});
	});
}
export default async function AddCV() {
	await connectToDatabase();
	const listCvTemplates = await CV.find({}).select("name");
	if (listCvTemplates === null) return <NoData />;
	const nameOnly = listCvTemplates.map((e) => e.name.toUpperCase());
	const cvTemplateFiltered = (await getCvTemplates()).filter((e) => !nameOnly.includes(e));

	return <View fileTemplates={cvTemplateFiltered} />;
}
