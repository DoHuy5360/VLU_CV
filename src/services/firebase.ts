import admin from "firebase-admin";

// Đường dẫn đến tệp serviceAccountKey.json
import serviceAccount from "../../serviceAccountKey.json";

// Khởi tạo ứng dụng Firebase
// admin.initializeApp(
// 	{
// 		credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// 		storageBucket: "swa-cloud.appspot.com",
// 	},
// );
const app = admin.apps.length ? admin.app() : admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    storageBucket: "swa-cloud.appspot.com"
});

// Khởi tạo reference đến Firebase Storage bucket
export enum FirebaseStorageFolders {
	MESSAGES = "messages",
	GROUPS = "groups",
	AVATARS = "avatars",
}
export default class FirebaseStorage {
	private static bucket = admin.storage().bucket();
	static async upload_to(fileName: string, fileBuffer: any, folderName: FirebaseStorageFolders): Promise<string> {
		try {
			// Tạo reference đến file trên Firebase Storage
			const fileRef = this.bucket.file(`${folderName}/${fileName}`);

			// Tạo stream ghi dữ liệu file lên Firebase Storage
			const fileUploadStream = fileRef.createWriteStream();

			// Ghi dữ liệu file vào stream
			fileUploadStream.end(fileBuffer);

			// Lắng nghe sự kiện khi quá trình tải lên hoàn thành
			return new Promise((res) => {
				fileUploadStream.on("finish", () => {
					console.log(`${fileName} uploaded successfully.`);
					// Lấy đường dẫn URL của file
					fileRef.getSignedUrl(
						{
							action: "read",
							expires: "01-01-3000", // Ngày hết hạn của URL | example "01-01-2024"
						},
						(err, url) => {
							if (err) {
								console.error("Error getting signed URL:", err);
								res("");
							}
							if (url !== undefined) res(url);
						}
					);
				});
			});
		} catch (error) {
			console.log(error);
			return "null";
		}
	}
	static async delete(folderName: FirebaseStorageFolders.MESSAGES | FirebaseStorageFolders.GROUPS | FirebaseStorageFolders.AVATARS, fileName: string) {
		try {
			this.bucket
				.file(`${folderName}/${fileName}`)
				.delete()
				.then(() => {
					console.log("Xóa tệp tin thành công");
				})
				.catch((error) => {
					console.error("Lỗi khi xóa tệp tin:", error);
				});
		} catch (error) {
			console.log(error);
		}
	}
}
