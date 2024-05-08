import fs from "fs";
import path from "path";

// Đường dẫn tương đối của thư mục dự án
const currentDirectory = process.cwd();

export function getAllFileNameInFolder(folderName: string): Promise<string[]> {
	return new Promise((resolve, reject) => {
		fs.readdir(path.join(currentDirectory, folderName), (err, files) => {
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
